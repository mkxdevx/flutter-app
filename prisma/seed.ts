import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const users = [
  {
    name: "Alex Johnson",
    username: "alexjohnson",
    email: "alex@example.com",
    bio: "Just here for the conversation.",
  },
  {
    name: "Maya Williams",
    username: "mayawilliams",
    email: "maya@example.com",
    bio: "Coffee, music, and good vibes.",
  },
  {
    name: "Jordan Smith",
    username: "jordansmith",
    email: "jordan@example.com",
    bio: "Building things on the internet.",
  },
  {
    name: "Sofia Martinez",
    username: "sofiamartinez",
    email: "sofia@example.com",
    bio: "Always looking for the next adventure.",
  },
  {
    name: "Chris Brown",
    username: "chrisbrown",
    email: "chris@example.com",
    bio: "Tech enthusiast and lifelong learner.",
  },
  {
    name: "Emma Davis",
    username: "emmadavis",
    email: "emma@example.com",
    bio: "Making memories one day at a time.",
  },
  {
    name: "Noah Wilson",
    username: "noahwilson",
    email: "noah@example.com",
    bio: "Sports, music, and good conversations.",
  },
  {
    name: "Olivia Taylor",
    username: "oliviataylor",
    email: "olivia@example.com",
    bio: "Creative mind with a curious heart.",
  },
  {
    name: "Liam Anderson",
    username: "liamanderson",
    email: "liam@example.com",
    bio: "Developer by day, gamer by night.",
  },
  {
    name: "Ava Thomas",
    username: "avathomas",
    email: "ava@example.com",
    bio: "Finding beauty in the little things.",
  },
  {
    name: "Ethan Jackson",
    username: "ethanjackson",
    email: "ethan@example.com",
    bio: "Learning something new every day.",
  },
  {
    name: "Isabella White",
    username: "isabellawhite",
    email: "isabella@example.com",
    bio: "Books, coffee, and late-night thoughts.",
  },
  {
    name: "Mason Harris",
    username: "masonharris",
    email: "mason@example.com",
    bio: "Exploring the world one place at a time.",
  },
  {
    name: "Sophia Martin",
    username: "sophiamartin",
    email: "sophia@example.com",
    bio: "Good energy only.",
  },
  {
    name: "Lucas Thompson",
    username: "lucasthompson",
    email: "lucas@example.com",
    bio: "Interested in tech and everything creative.",
  },
  {
    name: "Amelia Garcia",
    username: "ameliagarcia",
    email: "amelia@example.com",
    bio: "Chasing goals and enjoying the journey.",
  },
  {
    name: "James Martinez",
    username: "jamesmartinez",
    email: "james@example.com",
    bio: "Always down for a good conversation.",
  },
  {
    name: "Harper Robinson",
    username: "harperrobinson",
    email: "harper@example.com",
    bio: "Art, music, and everyday adventures.",
  },
  {
    name: "Benjamin Clark",
    username: "benjaminclark",
    email: "ben@example.com",
    bio: "Building cool things on the internet.",
  },
  {
    name: "Charlotte Lewis",
    username: "charlottelewis",
    email: "charlotte@example.com",
    bio: "Taking life one post at a time.",
  },
];

async function main() {
  for (const user of users) {
    await prisma.user.upsert({
      where: {
        username: user.username,
      },
      update: {},
      create: {
        ...user,
        followingIds: [],
      },
    });
  }

  console.log("20 users created!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
