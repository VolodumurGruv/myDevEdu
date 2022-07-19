let listOfPosts2 = [
	{
		id: 1,

		post: "some post1",

		title: "title 1",

		author: "Ivanov",

		comments: [
			{
				id: 1.1,

				comment: "some comment1",

				title: "title 1",

				author: "Rimus",
			},

			{
				id: 1.2,

				comment: "some comment2",

				title: "title 2",

				author: "Uncle",
			},
		],
	},

	{
		id: 2,

		post: "some post2",

		title: "title 2",

		author: "Petrov",

		comments: [
			{
				id: 1.1,

				comment: "some comment1",

				title: "title 1",

				author: "Rimus",
			},

			{
				id: 1.2,

				comment: "some comment2",

				title: "title 2",

				author: "Uncle",
			},

			{
				id: 1.3,

				comment: "some comment3",

				title: "title 3",

				author: "Rimus",
			},
		],
	},

	{
		id: 3,

		post: "some post3",

		title: "title 3",

		author: "Rimus",
	},

	{
		id: 4,

		post: "some post4",

		title: "title 4",

		author: "Uncle",
	},
];

function getQuntityPostsByAuthor(listOfPosts2, author) {
	let posts = 0;
	let comment = 0;

	let pos = listOfPosts2.filter((el) => el.author === author).length;
	let com = 0;

	listOfPosts2.forEach((el) => {
		if (el.comments) {
			com = el.comments.filter((el) => el.author === author).length;
		}
	});

	console.log(`posts: ${pos}\ncomments: ${com}`);

	listOfPosts2.forEach((el) => {
		if (el.author === author) {
			posts++;
		}
		if (el.comments) {
			comment = el.comments.filter((el) => el.author === author).length;
		}
	});

	return `posts: ${posts}\ncomments: ${comment}`;
}

console.log(getQuntityPostsByAuthor(listOfPosts2, "Rimus"));
// result -> post -1, comments – 3
