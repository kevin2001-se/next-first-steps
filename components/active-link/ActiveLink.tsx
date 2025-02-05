'use client'

import Link from "next/link";

import style from './ActiveLink.module.css'
import { usePathname } from "next/navigation";

type Props = {
  path: string;
  text: string;
}

export default function ActiveLink({ path, text }: Props) {

  // Hook de next - obtener el path de la ruta donde me encuentro
  const pathName = usePathname()

  return (
    <Link className={ `${style.link} ${(pathName === path) && style['active-link']}` } href={path}>{text}</Link>
  )
}
