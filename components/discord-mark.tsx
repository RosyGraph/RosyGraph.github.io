import Link from "next/link";
import Image from "next/image";

export default function DiscordMark() {
  return (
    <Link href="https://discordapp.com/users/RosyGraph#1240">
      <Image
        src="/discord-mark-black.png"
        alt="Discord Mark"
        width={32}
        height={24}
      />
    </Link>
  );
}
