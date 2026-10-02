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
        comments: [
          {
            username: "mayawilliams",
            body: "Glad to hear it!",
          },
        ],
      },
      {
        body: "Can't believe how fast this week is going.",
        likedBy: ["sofiamartinez", "chrisbrown"],
        comments: [
          {
            username: "sofiamartinez",
            body: "Seriously, this week flew by.",
          },
        ],
      },
    ],
  },

  {
    username: "mayawilliams",
    posts: [
      {
        body: "Coffee and music make everything better.",
        likedBy: ["alexjohnson", "emmadavis", "oliviataylor"],
        comments: [
          {
            username: "emmadavis",
            body: "Couldn't agree more!",
          },
          {
            username: "oliviataylor",
            body: "That's the perfect combination.",
          },
        ],
      },
      {
        body: "Found a new song I can't stop listening to.",
        likedBy: ["sofiamartinez", "alexjohnson"],
        comments: [
          {
            username: "alexjohnson",
            body: "Now I'm curious what song it is!",
          },
        ],
      },
    ],
  },

  {
    username: "jordansmith",
    posts: [
      {
        body: "Building something new today. Can't wait to share it!",
        likedBy: ["liamanderson", "chrisbrown"],
        comments: [
          {
            username: "chrisbrown",
            body: "Can't wait to see it!",
          },
        ],
      },
      {
        body: "Sometimes the best ideas come when you least expect them.",
        likedBy: ["alexjohnson", "mayawilliams", "ethanjackson"],
        comments: [
          {
            username: "mayawilliams",
            body: "So true!",
          },
          {
            username: "ethanjackson",
            body: "I've had that happen so many times.",
          },
        ],
      },
    ],
  },

  {
    username: "sofiamartinez",
    posts: [
      {
        body: "Already planning my next adventure.",
        likedBy: ["mayawilliams", "avathomas"],
        comments: [
          {
            username: "mayawilliams",
            body: "Where are you thinking about going?",
          },
        ],
      },
      {
        body: "There's nothing better than discovering a new place.",
        likedBy: ["alexjohnson", "masonharris", "jamesmartinez"],
        comments: [
          {
            username: "masonharris",
            body: "Absolutely! Exploring is the best.",
          },
          {
            username: "jamesmartinez",
            body: "I need to find somewhere new too.",
          },
        ],
      },
    ],
  },

  {
    username: "chrisbrown",
    posts: [
      {
        body: "Learning something new every day.",
        likedBy: ["jordansmith", "liamanderson"],
        comments: [
          {
            username: "jordansmith",
            body: "That's the goal!",
          },
        ],
      },
      {
        body: "Finally finished a project I've been working on for weeks.",
        likedBy: ["alexjohnson", "ethanjackson", "benjaminclark"],
        comments: [
          {
            username: "alexjohnson",
            body: "Nice! That's a great feeling.",
          },
          {
            username: "benjaminclark",
            body: "Congrats on finishing it!",
          },
        ],
      },
    ],
  },

  {
    username: "emmadavis",
    posts: [
      {
        body: "Today was one of those days that just makes you smile.",
        likedBy: ["mayawilliams", "oliviataylor"],
        comments: [
          {
            username: "oliviataylor",
            body: "Love days like that!",
          },
        ],
      },
      {
        body: "Making memories is what life is all about.",
        likedBy: ["sofiamartinez", "harperrobinson", "charlottelewis"],
        comments: [
          {
            username: "harperrobinson",
            body: "Couldn't agree more.",
          },
          {
            username: "charlottelewis",
            body: "So true ❤️",
          },
        ],
      },
    ],
  },

  {
    username: "noahwilson",
    posts: [
      {
        body: "What a game! That was way too close.",
        likedBy: ["liamanderson", "ethanjackson"],
        comments: [
          {
            username: "liamanderson",
            body: "That ending was crazy!",
          },
        ],
      },
      {
        body: "Nothing beats a good weekend with friends.",
        likedBy: ["alexjohnson", "jamesmartinez", "masonharris"],
        comments: [
          {
            username: "jamesmartinez",
            body: "Definitely!",
          },
          {
            username: "masonharris",
            body: "Can't beat it.",
          },
        ],
      },
    ],
  },

  {
    username: "oliviataylor",
    posts: [
      {
        body: "Feeling inspired today. Time to create something!",
        likedBy: ["emmadavis", "harperrobinson"],
        comments: [
          {
            username: "harperrobinson",
            body: "Can't wait to see what you make!",
          },
        ],
      },
      {
        body: "A little creativity can completely change your perspective.",
        likedBy: ["mayawilliams", "isabellawhite", "charlottelewis"],
        comments: [
          {
            username: "isabellawhite",
            body: "I really believe this.",
          },
          {
            username: "mayawilliams",
            body: "Absolutely!",
          },
        ],
      },
    ],
  },

  {
    username: "liamanderson",
    posts: [
      {
        body: "Finally beat that level I've been stuck on forever.",
        likedBy: ["noahwilson", "chrisbrown"],
        comments: [
          {
            username: "noahwilson",
            body: "Let's go! 😂",
          },
        ],
      },
      {
        body: "Sometimes gaming is exactly what you need after a long day.",
        likedBy: ["jordansmith", "ethanjackson"],
        comments: [
          {
            username: "ethanjackson",
            body: "Couldn't agree more.",
          },
        ],
      },
    ],
  },

  {
    username: "avathomas",
    posts: [
      {
        body: "It's the little things that make a day special.",
        likedBy: ["sofiamartinez", "emmadavis"],
        comments: [
          {
            username: "emmadavis",
            body: "So true!",
          },
        ],
      },
      {
        body: "Taking a moment to appreciate where I am right now.",
        likedBy: ["isabellawhite", "charlottelewis", "harperrobinson"],
        comments: [
          {
            username: "charlottelewis",
            body: "That's such a good mindset.",
          },
          {
            username: "harperrobinson",
            body: "Love this.",
          },
        ],
      },
    ],
  },

  {
    username: "ethanjackson",
    posts: [
      {
        body: "Trying to make today a productive one.",
        likedBy: ["chrisbrown", "jordansmith"],
        comments: [
          {
            username: "jordansmith",
            body: "You've got this!",
          },
        ],
      },
      {
        body: "There's always something new to learn.",
        likedBy: ["liamanderson", "benjaminclark", "alexjohnson"],
        comments: [
          {
            username: "benjaminclark",
            body: "Always something new!",
          },
          {
            username: "alexjohnson",
            body: "That's what keeps things interesting.",
          },
        ],
      },
      {
        body: "Small progress is still progress.",
        likedBy: ["jamesmartinez", "masonharris"],
        comments: [
          {
            username: "jamesmartinez",
            body: "Exactly!",
          },
        ],
      },
    ],
  },

  {
    username: "isabellawhite",
    posts: [
      {
        body: "Starting a new book tonight.",
        likedBy: ["avathomas", "oliviataylor"],
        comments: [
          {
            username: "oliviataylor",
            body: "What book are you reading?",
          },
        ],
      },
      {
        body: "Sometimes a quiet night with a good book is all you need.",
        likedBy: ["emmadavis", "charlottelewis", "harperrobinson"],
        comments: [
          {
            username: "emmadavis",
            body: "That sounds like the perfect night.",
          },
          {
            username: "harperrobinson",
            body: "Absolutely.",
          },
        ],
      },
      {
        body: "Just finished a book that I couldn't put down.",
        likedBy: ["mayawilliams", "sofiamartinez"],
        comments: [
          {
            username: "mayawilliams",
            body: "Now I need to know which one!",
          },
        ],
      },
    ],
  },

  {
    username: "masonharris",
    posts: [
      {
        body: "The view from up here was completely worth the hike.",
        likedBy: ["sofiamartinez", "jamesmartinez"],
        comments: [
          {
            username: "sofiamartinez",
            body: "That view looks amazing!",
          },
        ],
      },
      {
        body: "Already thinking about where to go next.",
        likedBy: ["avathomas", "charlottelewis", "alexjohnson"],
        comments: [
          {
            username: "alexjohnson",
            body: "Wherever you go, I'm sure it'll be worth it.",
          },
        ],
      },
      {
        body: "Nothing like getting outside and exploring.",
        likedBy: ["noahwilson", "ethanjackson"],
        comments: [
          {
            username: "noahwilson",
            body: "Couldn't agree more!",
          },
        ],
      },
    ],
  },

  {
    username: "sophiamartin",
    posts: [
      {
        body: "Good energy only today.",
        likedBy: ["ameliagarcia", "harperrobinson"],
        comments: [
          {
            username: "harperrobinson",
            body: "That's the energy!",
          },
        ],
      },
      {
        body: "Sometimes you just have to enjoy the moment.",
        likedBy: ["mayawilliams", "emmadavis", "avathomas"],
        comments: [
          {
            username: "avathomas",
            body: "So important to remember.",
          },
          {
            username: "emmadavis",
            body: "Absolutely ❤️",
          },
        ],
      },
      {
        body: "Today is going to be a good day.",
        likedBy: ["alexjohnson", "charlottelewis"],
        comments: [
          {
            username: "charlottelewis",
            body: "Yes it is!",
          },
        ],
      },
    ],
  },

  {
    username: "lucasthompson",
    posts: [
      {
        body: "There's always something interesting happening on the road.",
        likedBy: ["masonharris", "jamesmartinez"],
        comments: [
          {
            username: "masonharris",
            body: "That's what makes road trips fun.",
          },
        ],
      },
      {
        body: "Found a new place to explore this weekend.",
        likedBy: ["sofiamartinez", "ameliagarcia", "charlottelewis"],
        comments: [
          {
            username: "ameliagarcia",
            body: "That sounds fun!",
          },
          {
            username: "sofiamartinez",
            body: "Add it to the list!",
          },
        ],
      },
      {
        body: "Sometimes you just need to get out and drive.",
        likedBy: ["noahwilson", "benjaminclark"],
        comments: [
          {
            username: "benjaminclark",
            body: "Nothing clears your head like a drive.",
          },
        ],
      },
    ],
  },

  {
    username: "ameliagarcia",
    posts: [
      {
        body: "Chasing goals and enjoying the journey.",
        likedBy: ["sophiamartin", "harperrobinson"],
        comments: [
          {
            username: "sophiamartin",
            body: "Keep going!",
          },
        ],
      },
      {
        body: "One step closer to where I want to be.",
        likedBy: ["emmadavis", "charlottelewis", "alexjohnson"],
        comments: [
          {
            username: "emmadavis",
            body: "That's all that matters.",
          },
          {
            username: "alexjohnson",
            body: "You've got this!",
          },
        ],
      },
      {
        body: "Really proud of how far I've come.",
        likedBy: ["mayawilliams", "isabellawhite"],
        comments: [
          {
            username: "isabellawhite",
            body: "You should be!",
          },
        ],
      },
    ],
  },

  {
    username: "jamesmartinez",
    posts: [
      {
        body: "Always down for a good conversation.",
        likedBy: ["masonharris", "lucasthompson"],
        comments: [
          {
            username: "lucasthompson",
            body: "Same here!",
          },
        ],
      },
      {
        body: "Good conversations can turn into great friendships.",
        likedBy: ["alexjohnson", "chrisbrown", "noahwilson"],
        comments: [
          {
            username: "noahwilson",
            body: "Couldn't agree more.",
          },
          {
            username: "chrisbrown",
            body: "The best friendships start that way.",
          },
        ],
      },
      {
        body: "Nothing better than catching up with old friends.",
        likedBy: ["emmadavis", "harperrobinson"],
        comments: [
          {
            username: "harperrobinson",
            body: "Definitely!",
          },
        ],
      },
    ],
  },

  {
    username: "harperrobinson",
    posts: [
      {
        body: "Art has a way of saying things words can't.",
        likedBy: ["oliviataylor", "isabellawhite"],
        comments: [
          {
            username: "oliviataylor",
            body: "This is so true.",
          },
        ],
      },
      {
        body: "Listening to music while working always helps me focus.",
        likedBy: ["mayawilliams", "emmadavis", "charlottelewis"],
        comments: [
          {
            username: "mayawilliams",
            body: "Music makes such a difference!",
          },
          {
            username: "emmadavis",
            body: "Same! I always need something playing.",
          },
        ],
      },
      {
        body: "Looking for some new creative inspiration.",
        likedBy: ["sophiamartin", "ameliagarcia"],
        comments: [
          {
            username: "ameliagarcia",
            body: "I hope you find something amazing!",
          },
        ],
      },
    ],
  },

  {
    username: "benjaminclark",
    posts: [
      {
        body: "Building something cool today.",
        likedBy: ["jordansmith", "liamanderson"],
        comments: [
          {
            username: "jordansmith",
            body: "Can't wait to see it!",
          },
        ],
      },
      {
        body: "There's always another project to work on.",
        likedBy: ["chrisbrown", "ethanjackson", "lucasthompson"],
        comments: [
          {
            username: "ethanjackson",
            body: "Always something to build.",
          },
          {
            username: "lucasthompson",
            body: "That's the fun part!",
          },
        ],
      },
      {
        body: "Finally got everything working the way I wanted.",
        likedBy: ["alexjohnson", "jamesmartinez"],
        comments: [
          {
            username: "alexjohnson",
            body: "Nice! That's always a good feeling.",
          },
        ],
      },
    ],
  },

  {
    username: "charlottelewis",
    posts: [
      {
        body: "Taking life one day at a time.",
        likedBy: ["emmadavis", "avathomas"],
        comments: [
          {
            username: "avathomas",
            body: "That's the way to do it.",
          },
        ],
      },
      {
        body: "Today was definitely one for the memories.",
        likedBy: ["harperrobinson", "sophiamartin", "ameliagarcia"],
        comments: [
          {
            username: "sophiamartin",
            body: "Sounds like a great day!",
          },
          {
            username: "ameliagarcia",
            body: "Love days like that.",
          },
        ],
      },
      {
        body: "Sometimes the simplest days are the best ones.",
        likedBy: ["isabellawhite", "mayawilliams"],
        comments: [
          {
            username: "isabellawhite",
            body: "Couldn't agree more.",
          },
        ],
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
  const users = await prisma.user.findMany();

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
  const users = await prisma.user.findMany();

  for (const userData of postData) {
    const postOwner = users.find((user) => user.username === userData.username);

    if (!postOwner) {
      throw new Error(`User ${userData.username} not found`);
    }

    for (const post of userData.posts) {
      for (const username of post.likedBy) {
        const userWhoLikedPost = users.find(
          (user) => user.username === username,
        );

        if (!userWhoLikedPost) {
          throw new Error(`User ${username} not found`);
        }

        await prisma.user.update({
          where: {
            id: userWhoLikedPost.id,
          },
          data: {
            followingIds: {
              push: postOwner.id,
            },
          },
        });
      }
    }
  }
  console.log("Following relationships created");
}

async function createComments() {
  const users = await prisma.user.findMany();

  for (const userData of postData) {
    const postOwner = users.find((user) => user.username === userData.username);

    if (!postOwner) {
      throw new Error(`User ${userData.username} not found`);
    }

    for (const post of userData.posts) {
      const databasePost = await prisma.post.findFirst({
        where: {
          userId: postOwner.id,
          body: post.body,
        },
      });

      if(!databasePost) {
        throw new Error(`Post not found`)
      }

      for (const comment of post.comments) {
        const commenter = users.find(
          (user) => user.username === comment.username,
        );

        if (!commenter) {
          throw new Error(`User ${comment.username} not found`);
        }

        await prisma.comment.create({
          data: {
            body: comment.body,
            userId: commenter.id,
            postId: databasePost.id,
          },
        });
      }
    }
  }
  console.log("Comments created!")
}

async function main() {
  // await deleteTestData();
  // await createUsers();
  // await createPosts();
  // await createFollows();
  await createComments();
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

