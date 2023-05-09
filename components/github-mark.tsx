import Link from "next/link";
import Image from "next/image";

export default function GitHubMark() {
  return (
    <Link href="https://github.com/RosyGraph">
      <Image
        src="/github-mark/github-mark.png"
        alt="Github Mark"
        width={32}
        height={32}
      />
    </Link>
  );
}
