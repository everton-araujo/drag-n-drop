import Image from "next/image";

export default function Avatar() {
  return (
    <Image
      src='https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=1xw:0.84415xh;center,top'
      alt="User avatar"
      height={60}
      width={60}
      className="w-50 h-50 rounded-full"
    />
  )
}
