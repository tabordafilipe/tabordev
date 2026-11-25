interface LogoProps {
  small?: boolean;
}

export default function Logo({ small }: LogoProps) {
  return (
    <span className="font-bold text-xl tracking-tight">
      {small ? "FT" : "Filipe Taborda"}
    </span>
  );
}
