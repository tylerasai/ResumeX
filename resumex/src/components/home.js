import React, {useState} from "react";
import "./home.css";
import Main from "./Main"
// import useVisualMode from "../Hooks/useVisualMode"

export default function Home(props) {

return (
<html lang="en">
<head>
	<meta charset="utf-8"></meta>
	<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
	<title>Services Section Using Bootstrap 4</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"></link>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/fontawesome.min.css"></link>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.css"></link>
	<link href="https://fonts.googleapis.com/css?family=Poppins:500,700&display=swap" rel="stylesheet"></link>
</head>
<body>

	<section class="section-services">
		<div class="container">
			<div class="row justify-content-center text-center">
				<div class="col-md-10 col-lg-8">
					<div class="header-section">
						<h2 class="title">Resume<span>X</span></h2>
						<p class="description">The website is used to prepare your resume for matching your favorite job.</p>
						<a href="/main"><button type="submit" form="main_form" value="Submit" className="main_button" >Main page</button></a>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="part-1">
							<i class="fab fa-500px"></i>
							<h3 class="title">Job Comparing services</h3>
						</div>
						<div class="part-2">
							<p class="description">You can submit the job description and our app will search for important words used in the job description</p>
							<a href="#"><i class="fas fa-arrow-circle-right"></i>Read More</a>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="part-1">
							<i class="fab fa-angellist"></i>
							<h3 class="title">Online chat may refer to any kind communication</h3>
						</div>
						<div class="part-2">
							<p class="description">You can contact us through any of our online services for help</p>
							<a href="#"><i class="fas fa-arrow-circle-right"></i>Read More</a>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="part-1">
							<i class="fas fa-award"></i>
							<h3 class="title">Resume scan services</h3>
						</div>
						<div class="part-2">
							<p class="description">You will be able to submit your resume, our system will then recommend for you changes in your resume and how close does it match with job description</p>
							<a href="#"><i class="fas fa-arrow-circle-right"></i>Read More</a>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="part-1">
							<i class="fab fa-asymmetrik"></i>
							<h3 class="title">Extra services provided</h3>
						</div>
						<div class="part-2">
							<p class="description">You will be able to see the number of times important words are repeated in job description and that you should use those words.</p>
							<a href="#"><i class="fas fa-arrow-circle-right"></i>Read More</a>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="part-1">
							<i class="fas fa-broadcast-tower"></i>
							<h3 class="title">Provide solutions and services to end users</h3>
						</div>
						<div class="part-2">
							<p class="description">You will get the whole report on the comparison with the recommendations on which words should be changed or which extra words should be used.</p>
							<a href="#"><i class="fas fa-arrow-circle-right"></i>Read More</a>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="part-1">
							<i class="fab fa-canadian-maple-leaf"></i>
							<h3 class="title">Other uses</h3>
						</div>
						<div class="part-2">
							<p class="description">This website can be used by other job websites and the government where they can provide a better services for end users to improve their resumes.</p>
							<a href="#"><i class="fas fa-arrow-circle-right"></i>Read More</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

</body>
</html>
);
}