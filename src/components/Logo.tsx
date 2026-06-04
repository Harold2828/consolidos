type LogoProps = {
  className?: string
  width?: number
  height?: number
}

const logo =
  'http://consolidos.online/wp-content/uploads/2025/08/LOGO-1-CONSOLIDOS-SAS-1.png'

export function Logo({ className, width = 300, height = 100 }: LogoProps) {
  return (
    <img
      src={logo}
      alt="Consolidos S.A.S"
      width={width}
      height={height}
      className={className}
    />
  )
}
