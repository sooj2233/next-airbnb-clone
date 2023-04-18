import Image from "next/image"

const Avatar = () => {
  return (
   <Image
   className="rounded-full"
   src="/images/img2.jpg"
   alt="Picture of the author"
   width={30}
   height={30}
    />
  )
}

export default Avatar