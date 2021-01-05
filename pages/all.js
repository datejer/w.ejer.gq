import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";

export default function Home() {
	const [images, setImages] = useState([]);

	useEffect(() => {
		axios
			.get(`/api/all`)
			.then((response) => {
				console.log(response.data);
				setImages(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>colossal dub bossman</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>w</h1>

				<p className={styles.description}>colossal dub bossman</p>

				<div className={styles.grid}>
					{images.map((image) => (
						<a href={image} className={styles.card}>
							<img src={image} />
						</a>
					))}
				</div>
			</main>

			<footer className={styles.footer}>
				<a href="https://ejer.ga/" target="_blank" rel="noopener noreferrer">
					Made by <span className={styles.name}>ejer</span>
				</a>
			</footer>
		</div>
	);
}
