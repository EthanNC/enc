const PROJECTS: {
  name: string;
  description: string;
  previewImage: string;
  repoUrl: string;
  liveLink: string;
}[] = [
  {
    name: "Shelf.sst",
    description:
      "A fork of Shelf, an open source Asset Management Infrastructure for absolutely everyone. This fork replaces out of the box Supabase infrastructure with their AWS primitives using SST.",
    liveLink: "https://shelf.nu/",
    previewImage: "/project1.png",
    repoUrl: "https://github.com/EthanNC/shelf.nu",
  },
  {
    name: "TCG App",
    description:
      "A web application that allows users to search for cards from Flesh and Blood Trading Card Game.",
    liveLink: "https://google.com",
    previewImage: "/project2.png",
    repoUrl: "https://github.com/EthanNC/tcg-app",
  },
];

export default PROJECTS;
