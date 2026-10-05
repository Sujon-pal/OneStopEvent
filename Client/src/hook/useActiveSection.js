import { useEffect, useState } from "react";

const observerOptions = {
  rootMargin: "-80px 0px -60% 0px",
  threshold: 0,
};

export function useActiveSection(ids, enabled = true) {
  const [active, setActive] = useState("");

  useEffect(() => {
    if (!enabled || ids.length === 0) {
      setActive("");
      return;
    }

    const visibleSections = new Set();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.add(entry.target.id);
        } else {
          visibleSections.delete(entry.target.id);
        }
      });

      const current =
        [...ids].reverse().find((id) => visibleSections.has(id)) ?? "";

      setActive((previous) => (previous === current ? previous : current));
    }, observerOptions);

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [ids, enabled]);

  return active;
}
