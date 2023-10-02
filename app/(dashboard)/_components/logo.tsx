import Image from "next/image"

export const Logo = () => {
  return (
    <Image
      width={130}
      height={130}
      alt="Logo"
      src="/logo.svg"
      className="ml-5"
    />
  )
}