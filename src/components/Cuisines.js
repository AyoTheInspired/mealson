import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

function Cuisines() {
	const { cuisineName, cuisineSource } = useParams();
	const [meals, setMeals] = useState({});

	useEffect(
		() => {
			fetch(
				"https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
			).then((res) =>
				res.json().then((data) => {
					// setMeals(data);
					console.log(data);
					console.log(typeof data);
				})
			);
		},
		{ cuisineName }
	);

	return (
		<Container fluid>
			<Row>
				<Section className="flex-col bg-danger py-5">
					<h3 className="text-center text-primary d-block">
						CUISINES PAGE for {cuisineName}
					</h3>

					{/* <img src={cuisineSource} alt="" /> */}
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
						dicta autem sapiente eligendi dolor praesentium ex quasi nisi
						laboriosam, omnis libero voluptate incidunt. Corporis ut fuga iure
						aspernatur quos eius facilis fugit, pariatur sed nisi vitae
						consequatur laboriosam quis similique praesentium explicabo deserunt
						accusamus inventore corrupti? Iure perferendis iusto illum fugiat
						veritatis eius maxime excepturi dolores modi nesciunt! Quia beatae
						soluta corporis, quas eligendi repellat nihil. Delectus sunt alias
						voluptatem ut excepturi aut, facere perspiciatis. Voluptatibus cum
						veritatis molestiae minus sapiente ipsam, asperiores repudiandae eos
						vitae reprehenderit quam accusantium nostrum exercitationem tempora
						ve.
					</p>

					{/* {meals.map((meal, id) => {
						const { strMeal } = meal;

						return <div>{strMeal}</div>;
					})} */}
				</Section>
			</Row>
		</Container>
	);
}

export default Cuisines;

const Section = styled.section`
	/* min-height: auto;
	z-index: 200; */
`;
