/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*\//, "");
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
	output: "export",
	images: {
		unoptimized: true,
	},
  assetPrefix,
  basePath,
};
