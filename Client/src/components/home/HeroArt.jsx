import heroImg from '../../assets/hero.webp'

export default function HeroArt() {
  return (
    <img
      src={heroImg}
      alt="A decorated wedding stage with flowers and warm lights"
      width="550"
      height="650"
      fetchPriority="high"
      className=" bg-yellow-200 aspect-550/650 w-full rounded-xl object-cover shadow-2xl"
    />
  )
}