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

const postData = [
  {
    username: "alexjohnson",
    posts: [
      {
        body: "Having a pretty good day!",
        likedBy: ["mayawilliams", "jordansmith"],
      },
      {
        body: "Can't believe how fast this week is going.",
        likedBy: ["sofiamartinez", "chrisbrown"],
      },
    ],
  },
  {
    username: "mayawilliams",
    posts: [
      {
        body: "Coffee and music make everything better.",
        likedBy: ["alexjohnson", "emmadavis", "oliviataylor"],
      },
      {
        body: "Found a new song I can't stop listening to.",
        likedBy: ["sofiamartinez", "alexjohnson"],
      },
    ],
  },
  {
    username: "jordansmith",
    posts: [
      {
        body: "Building something new today. Can't wait to share it!",
        likedBy: ["liamanderson", "chrisbrown"],
      },
      {
        body: "Sometimes the best ideas come when you least expect them.",
        likedBy: ["alexjohnson", "mayawilliams", "ethanjackson"],
      },
    ],
  },
  {
    username: "sofiamartinez",
    posts: [
      {
        body: "Already planning my next adventure.",
        likedBy: ["mayawilliams", "avathomas"],
      },
      {
        body: "There's nothing better than discovering a new place.",
        likedBy: ["alexjohnson", "masonharris", "jamesmartinez"],
      },
    ],
  },
  {
    username: "chrisbrown",
    posts: [
      {
        body: "Learning something new every day.",
        likedBy: ["jordansmith", "liamanderson"],
      },
      {
        body: "Finally finished a project I've been working on for weeks.",
        likedBy: ["alexjohnson", "ethanjackson", "benjaminclark"],
      },
    ],
  },
  {
    username: "emmadavis",
    posts: [
      {
        body: "Today was one of those days that just makes you smile.",
        likedBy: ["mayawilliams", "oliviataylor"],
      },
      {
        body: "Making memories is what life is all about.",
        likedBy: ["sofiamartinez", "harperrobinson", "charlottelewis"],
      },
    ],
  },
  {
    username: "noahwilson",
    posts: [
      {
        body: "What a game! That was way too close.",
        likedBy: ["liamanderson", "ethanjackson"],
      },
      {
        body: "Nothing beats a good weekend with friends.",
        likedBy: ["alexjohnson", "jamesmartinez", "masonharris"],
      },
    ],
  },
  {
    username: "oliviataylor",
    posts: [
      {
        body: "Feeling inspired today. Time to create something!",
        likedBy: ["emmadavis", "harperrobinson"],
      },
      {
        body: "A little creativity can completely change your perspective.",
        likedBy: ["mayawilliams", "isabellawhite", "charlottelewis"],
      },
    ],
  },
  {
    username: "liamanderson",
    posts: [
      {
        body: "Finally beat that level I've been stuck on forever.",
        likedBy: ["noahwilson", "chrisbrown"],
      },
      {
        body: "Sometimes gaming is exactly what you need after a long day.",
        likedBy: ["jordansmith", "ethanjackson"],
      },
    ],
  },
  {
    username: "avathomas",
    posts: [
      {
        body: "It's the little things that make a day special.",
        likedBy: ["sofiamartinez", "emmadavis"],
      },
      {
        body: "Taking a moment to appreciate where I am right now.",
        likedBy: ["isabellawhite", "charlottelewis", "harperrobinson"],
      },
    ],
  },
  {
    username: "ethanjackson",
    posts: [
      {
        body: "Trying to make today a productive one.",
        likedBy: ["chrisbrown", "jordansmith"],
      },
      {
        body: "There's always something new to learn.",
        likedBy: ["liamanderson", "benjaminclark", "alexjohnson"],
      },
      {
        body: "Small progress is still progress.",
        likedBy: ["jamesmartinez", "masonharris"],
      },
    ],
  },
  {
    username: "isabellawhite",
    posts: [
      {
        body: "Starting a new book tonight.",
        likedBy: ["avathomas", "oliviataylor"],
      },
      {
        body: "Sometimes a quiet night with a good book is all you need.",
        likedBy: ["emmadavis", "charlottelewis", "harperrobinson"],
      },
      {
        body: "Just finished a book that I couldn't put down.",
        likedBy: ["mayawilliams", "sofiamartinez"],
      },
    ],
  },
  {
    username: "masonharris",
    posts: [
      {
        body: "The view from up here was completely worth the hike.",
        likedBy: ["sofiamartinez", "jamesmartinez"],
      },
      {
        body: "Already thinking about where to go next.",
        likedBy: ["avathomas", "charlottelewis", "alexjohnson"],
      },
      {
        body: "Nothing like getting outside and exploring.",
        likedBy: ["noahwilson", "ethanjackson"],
      },
    ],
  },
  {
    username: "sophiamartin",
    posts: [
      {
        body: "Good energy only today.",
        likedBy: ["ameliagarcia", "harperrobinson"],
      },
      {
        body: "Sometimes you just have to enjoy the moment.",
        likedBy: ["mayawilliams", "emmadavis", "avathomas"],
      },
      {
        body: "Today is going to be a good day.",
        likedBy: ["alexjohnson", "charlottelewis"],
      },
    ],
  },
  {
    username: "lucasthompson",
    posts: [
      {
        body: "There's always something interesting happening on the road.",
        likedBy: ["masonharris", "jamesmartinez"],
      },
      {
        body: "Found a new place to explore this weekend.",
        likedBy: ["sofiamartinez", "ameliagarcia", "charlottelewis"],
      },
      {
        body: "Sometimes you just need to get out and drive.",
        likedBy: ["noahwilson", "benjaminclark"],
      },
    ],
  },
  {
    username: "ameliagarcia",
    posts: [
      {
        body: "Chasing goals and enjoying the journey.",
        likedBy: ["sophiamartin", "harperrobinson"],
      },
      {
        body: "One step closer to where I want to be.",
        likedBy: ["emmadavis", "charlottelewis", "alexjohnson"],
      },
      {
        body: "Really proud of how far I've come.",
        likedBy: ["mayawilliams", "isabellawhite"],
      },
    ],
  },
  {
    username: "jamesmartinez",
    posts: [
      {
        body: "Always down for a good conversation.",
        likedBy: ["masonharris", "lucasthompson"],
      },
      {
        body: "Good conversations can turn into great friendships.",
        likedBy: ["alexjohnson", "chrisbrown", "noahwilson"],
      },
      {
        body: "Nothing better than catching up with old friends.",
        likedBy: ["emmadavis", "harperrobinson"],
      },
    ],
  },
  {
    username: "harperrobinson",
    posts: [
      {
        body: "Art has a way of saying things words can't.",
        likedBy: ["oliviataylor", "isabellawhite"],
      },
      {
        body: "Listening to music while working always helps me focus.",
        likedBy: ["mayawilliams", "emmadavis", "charlottelewis"],
      },
      {
        body: "Looking for some new creative inspiration.",
        likedBy: ["sophiamartin", "ameliagarcia"],
      },
    ],
  },
  {
    username: "benjaminclark",
    posts: [
      {
        body: "Building something cool today.",
        likedBy: ["jordansmith", "liamanderson"],
      },
      {
        body: "There's always another project to work on.",
        likedBy: ["chrisbrown", "ethanjackson", "lucasthompson"],
      },
      {
        body: "Finally got everything working the way I wanted.",
        likedBy: ["alexjohnson", "jamesmartinez"],
      },
    ],
  },
  {
    username: "charlottelewis",
    posts: [
      {
        body: "Taking life one day at a time.",
        likedBy: ["emmadavis", "avathomas"],
      },
      {
        body: "Today was definitely one for the memories.",
        likedBy: ["harperrobinson", "sophiamartin", "ameliagarcia"],
      },
      {
        body: "Sometimes the simplest days are the best ones.",
        likedBy: ["isabellawhite", "mayawilliams"],
      },
    ],
  },
];

async function deleteTestData() {
  // delete my test posts
  await prisma.post.deleteMany({
    where: {
      user: {
        username: "mikayla123",
      },
    },
  });

  // delete test account
  await prisma.user.delete({
    where: {
      username: "JD",
    },
  });
  console.log("Test data deleted");
}

// Create users
async function createUsers() {
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

async function createPosts() {
  // create 50 posts

  // find all users
  const users = await prisma.user.findMany();

  // loop through users w/ postData
  for (const userData of postData) {
    const databaseUser = users.find(
      (dbUser) => dbUser.username === userData.username,
    );

    if (!databaseUser) {
      throw new Error(`User ${userData.username} not found`);
    }

    for (const post of userData.posts) {
      const likedIds = post.likedBy.map((username) => {
        const user = users.find((user) => user.username === username);

        if (!user) {
          throw new Error(`User ${username} not found`);
        }
        return user.id;
      });

      await prisma.post.create({
        data: {
          body: post.body,
          userId: databaseUser.id,
          likedIds,
        },
      });
    }
  }
  console.log("50 posts created!");
}

async function createFollows() {
  // make users follow each other
}


async function createComments() {
  // create comments
}

async function main() {
  // await deleteTestData();
  // await createUsers();
  await createPosts();
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// Delete my test posts

// Get users from database

// Create posts

// Create comments
