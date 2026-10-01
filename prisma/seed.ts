import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const users = [
  {
    name: "Alex Johnson",
    username: "alexjohnson",
    email: "alex@example.com",
    bio: "Just here for the conversation.",
    profileImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/f_auto/q_auto/alex_profile-img.jpg",
    coverImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790813448/city_cover-img.jpg",
  },
  {
    name: "Maya Williams",
    username: "mayawilliams",
    email: "maya@example.com",
    bio: "Coffee, music, and good vibes.",
    profileImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790812869/maya_profile-img.jpg",
    coverImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790813433/beach_cover-img.jpg",
  },
  {
    name: "Jordan Smith",
    username: "jordansmith",
    email: "jordan@example.com",
    bio: "Building things on the internet.",
    profileImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/f_auto/q_auto/jordan_profile-img.jpg",
    coverImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790813478/workspace_cover-img.jpg",
  },
  {
    name: "Sofia Martinez",
    username: "sofiamartinez",
    email: "sofia@example.com",
    bio: "Always looking for the next adventure.",
    profileImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790812885/Sofia_profile-img.jpg",
    coverImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790813464/mountains_cover-img.jpg",
  },
  {
    name: "Chris Brown",
    username: "chrisbrown",
    email: "chris@example.com",
    bio: "Tech enthusiast and lifelong learner.",
    profileImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/f_auto/q_auto/chris_profile-img.jpg",
    coverImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790813470/sunset_cover-img.jpg",
  },
  {
    name: "Emma Davis",
    username: "emmadavis",
    email: "emma@example.com",
    bio: "Making memories one day at a time.",
    profileImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790812835/emma_profile-img.jpg",
    coverImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790813456/flowers_cover-img.jpg",
  },
  {
    name: "Noah Wilson",
    username: "noahwilson",
    email: "noah@example.com",
    bio: "Sports, music, and good conversations.",
    profileImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790812873/noah_profile-img.jpg",
    coverImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790813430/basketball_cover-img.jpg",
  },
  {
    name: "Olivia Taylor",
    username: "oliviataylor",
    email: "olivia@example.com",
    bio: "Creative mind with a curious heart.",
    profileImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790813136/olivia_profile-img.jpg",
    coverImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790813449/coffee-shop_cover-img.jpg",
  },
  {
    name: "Liam Anderson",
    username: "liamanderson",
    email: "liam@example.com",
    bio: "Developer by day, gamer by night.",
    profileImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790812855/liam_profile-img.jpg",
    coverImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790813472/tech_cover-img.jpg",
  },
  {
    name: "Ava Thomas",
    username: "avathomas",
    email: "ava@example.com",
    bio: "Finding beauty in the little things.",
    profileImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790812821/ava_profile-img.jpg",
    coverImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790813470/ocean_cover-img.jpg",
  },
  {
    name: "Ethan Jackson",
    username: "ethanjackson",
    email: "ethan@example.com",
    bio: "Learning something new every day.",
    profileImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790812838/ethan_profile-img.jpg",
    coverImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790813420/architecture_cover-img.jpg",
  },
  {
    name: "Isabella White",
    username: "isabellawhite",
    email: "isabella@example.com",
    bio: "Books, coffee, and late-night thoughts.",
    profileImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790812852/isabella_profile-img.jpg",
    coverImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790813436/books-coffee_cover-img.jpg",
  },
  {
    name: "Mason Harris",
    username: "masonharris",
    email: "mason@example.com",
    bio: "Exploring the world one place at a time.",
    profileImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790812867/mason_profile-img.jpg",
    coverImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790813461/hiking_cover-img.jpg",
  },
  {
    name: "Sophia Martin",
    username: "sophiamartin",
    email: "sophia@example.com",
    bio: "Good energy only.",
    profileImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790812888/sophia_profile-img.jpg",
    coverImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790813446/city2_cover-img.jpg",
  },
  {
    name: "Lucas Thompson",
    username: "lucasthompson",
    email: "lucas@example.com",
    bio: "Interested in tech and everything creative.",
    profileImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790812861/lucas_profile-img.jpg",
    coverImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790813445/car-road_cover-img.jpg",
  },
  {
    name: "Amelia Garcia",
    username: "ameliagarcia",
    email: "amelia@example.com",
    bio: "Chasing goals and enjoying the journey.",
    profileImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790812812/amelia_profile-img.jpg",
    coverImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790813476/travel_cover-img.jpg",
  },
  {
    name: "James Martinez",
    username: "jamesmartinez",
    email: "james@example.com",
    bio: "Always down for a good conversation.",
    profileImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790812853/james_profile-img.jpg",
    coverImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790813432/beach2_cover-img.jpg",
  },
  {
    name: "Harper Robinson",
    username: "harperrobinson",
    email: "harper@example.com",
    bio: "Art, music, and everyday adventures.",
    profileImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790812842/harper_profile-img.jpg",
    coverImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790813425/art_cover-img.jpg",
  },
  {
    name: "Benjamin Clark",
    username: "benjaminclark",
    email: "ben@example.com",
    bio: "Building cool things on the internet.",
    profileImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790812827/benjamin_profile-img.jpg",
    coverImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790813482/workspace2_cover-img.jpg",
  },
  {
    name: "Charlotte Lewis",
    username: "charlottelewis",
    email: "charlotte@example.com",
    bio: "Taking life one post at a time.",
    profileImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790812829/charlotte_profile-img.jpg",
    coverImage:
      "https://res.cloudinary.com/jyfjieyc/image/upload/v1790813468/nature_cover-img.jpg",
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
