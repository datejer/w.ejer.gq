import fs from "fs";
import path from "path";

export default (req, res) => {
	const dirRelativeToPublicFolder = "img";
	const dir = path.resolve("./public", dirRelativeToPublicFolder);
	fs.readdir(dir, (err, files) => {
		const images = files.map((name) =>
			path.join("/", dirRelativeToPublicFolder, name)
		);
		res.redirect(images[Math.floor(Math.random() * images.length)]);
	});
};
