import cg3207_img from '../../../assets/cg3207_proj.jpg'
import ee4218_img from '../../../assets/ee4218.png'
import terminus_img from '../../../assets/terminus.png'
import stardust_conquerors_img from '../../../assets/stardust_conquerors.png'
import embedded_video_player_img from '../../../assets/embedded-video-player.jpeg'
import cg4002_img from '../../../assets/cg4002.png'

const project_data = [
	{
		title: "[Hack&Roll 2021] Minesweeper Duels",
		description: "24h hackathon project, 2 player real-time multiplayer built with socket.io and expressJS. Minesweeper Duels is a 2 player game where each player takes turns to reveal a space in the Minesweeper board. However, each player only has a limited amount of time, where it ticks down during your turn. Clicking on a mine deducts additional time.",
		img: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/325/940/datas/gallery.jpg',
		source: "https://github.com/iamchenjiajun/minesweeper-duels",
		demo: "https://minesweeper-royale.herokuapp.com/",
		category: "web",
		markup:
		<>
			<h2>[Hack&Roll 2021] Minesweeper Duels</h2>
			<p>category: <em>web development</em></p>

			<section className="project__article-box">
				<h3>Summary</h3>
				<summary>24 hour hackathon project, 2 player real-time multiplayer built with <em>socket.io</em> and <em>expressJS</em>. Minesweeper Duels is a 2 player game where each player takes turns to reveal a space in the Minesweeper board. However, each player only has a limited amount of time, where it ticks down during your turn. Clicking on a mine deducts additional time.</summary>
			</section>
			
			<h3>Inspiration</h3>
			<p>Minesweeper is lots of fun, but there really isn't an easy way to dynamically battle against another person to pit your skills against each other. You could compare your average solve time, but that is just by-the-numbers and boring.</p>
			<p>What if we could turn Minesweeper into a fast-paced, edge-of-your-seat, constantly evolving struggle of wits?</p>

			<h3>What it does</h3>
			<p>Minesweeper Duels is a 2 player game where each player takes turns to reveal a space in the Minesweeper board. However, each player only has a limited amount of time, where it ticks down during your turn. Clicking on a mine deducts additional time.</p>
			
			<section className="project__article-box">
				<h3>Quick User Guide</h3>

				<h4>Creating and joining rooms</h4>
				<p>Click on "create room" to create a room, and send the code to your friend! Your friend can enter the code on the main page and click on "join room" to join!</p>

				<h4>Starting the game</h4>
				<p>Once your friend joins the room, the minesweeper grid appears in the middle of your screen. Click on a square to start the game.</p>
				
				<h4>Gameplay</h4>
				<p>The goal of the game is to run your opponent out of time, or to complete the board (open all the safe squares) with more time remaining than your opponent.</p>
				<p>You take turns to open squares on the board, and your timer runs on your turn.</p>
				<p>A time penalty would be given when you click on a mine.</p>
				<p>You can right-click on squares to flag them, but your opponent would not see the flags.</p>
			</section>

			<h3>How we built it</h3>
			<p>Using <em>node.js, socket.io, expressJS, JavaScript, HTML and CSS</em>.</p>
				
			<h3>Challenges we ran into</h3>
			<p>The turn timer was really tricky to implement. This is because we had to take into account the latency between the player and the server, in addition to the timers being disjoint. This led us having to come up with some tricky logic to start and pause the timers.</p>
			
			<h3>Accomplishments that we're proud of</h3>
			<p>Make a working version of the Minesweeper program and adding our own spin to it.</p>
			<p>Making a real time multiplayer browser game.</p>

			<h3>What we learned</h3>
			<p>node.js was a new framework to some of our members, and we had to pick it up as we went.</p>
			<p>How socketIO sends and waits for messages between client and server.</p>
		</>,
	},
	{
		title: "Embedded Video Player",
		description: "A handheld video player that plays a file stored on an SD card. The software is written in bare-metal C, and the hardware consists of a custom printed circuit board.",
		img: embedded_video_player_img,
		category: "embedded software",
		markup:
		<>
			<h2>Embedded Video Player</h2>
			<p>category: <em>embedded systems</em></p>

			<section className="project__article-box">
				<h3>Summary</h3>
				<summary>
					<ul>
						<li>Created a <em>printed circuit board</em> for a video player that plays from a file stored on the SD card.</li>
						<li>Written with <em>bare-metal C</em> code, including the <em>C driver</em> for the OLED display.</li>
						<li>A <em>Python script</em> converts videos to a binary format readable by the system using <em>ffmpeg</em>.</li>
					</ul>
				</summary>
			</section>

			<img src={embedded_video_player_img} alt="" />
		</>,
	},
	{
		title: "[CS2113] termiNus",
		description: "termiNus is an interactive task manager for undergraduate students in NUS. It is ideal for keyboard-inclined students to showcase their skills and make their life easier with the help of termiNus.",
		img: terminus_img,
		source: "https://github.com/AY2021S1-CS2113-T14-3/tp",
		demo: "https://ay2021s1-cs2113-t14-3.github.io/tp/",
		category: "software",
		markup:
		<>
			<h2>termiNus</h2>
			<p>category: <em>software</em></p>
			<section className="project__article-box">
				<h3>Summary</h3>
				<small>This is a terminal based program written in Java.</small>
				<ul>
					<li>termiNus is an <em>interactive task manager</em> for undergraduate students in NUS.</li>
					<li>In the module, we learnt <em>Object Oriented Programming (OOP) principles</em> and how to apply them in a Software Engineering context.</li>
					<li>My team also had to write extensive user and developer documentation, explaining the technical parts using UML diagrams.</li>
					<li>Due to the collaborative nature of the project, we also learnt how to use Version Control Systems like Git to facilitate the software development process, using workflows such as fork and pull requests.</li>
				</ul>
			</section>
			<img src={terminus_img} alt="" />
			<small>Screenshot of the program.</small>
			<p>The screenshot above shows the initial screen when the program is loaded, with one added task and an added module.</p>
			<img src="https://ay2021s1-cs2113-t14-3.github.io/tp/images/ParserSequenceDiagram.png" alt="" />
			<p>The above image shows a UML diagram I made, which explains part of the code for parsing user commands.</p>
		</>,
	},
	{
		title: "[Orbital] Stardust Conquerors",
		description: "A browser game written in HTML5, CSS and JavaScript on the front-end and supported by the Django framework on the backend.",
		img: stardust_conquerors_img,
		demo: "https://stardustconquerors.herokuapp.com/",
		category: "web",
		markup:
		<>
			<h2>Stardust Conquerors</h2>
			<p>category: <em>web</em></p>
			<section className="project__article-box">
				<h3>Summary</h3>
				<p>A browser game written in HTML5, CSS and JavaScript on the front-end and supported by the Django framework on the backend.</p>
				<ul>
					<li>An idle game created to provide a positive distraction when doing repetitive and menial tasks.</li>
					<li>Built using HTML, CSS and JavaScript with Django framework for the back-end.</li>
				</ul>
			</section>
		</>,
	},
	{
		title: "[Capstone Project] AR Laser Tag",
		description: "An exciting AR laser tag game.",
		img: cg4002_img,
		category: "embedded software",
		markup:
		<>
			<h2>Capstone Project - AR Laser Tag</h2>
			<p>category: <em>embedded, software</em></p>
			<section className="project__article-box">
				<h3>Summary</h3>
				<ul>
					<li>Engineered the <em>hardware/electronics</em> using hardware sensors and 3D printing and wrote <em>firmware in Arduino/C++</em>.</li>
					<li>Designed an algorithm in <em>Python</em> to <em>defragment Bluetooth Low Energy (BLE) packets</em> and ensure reliability when data is received from the microcontroller.</li>
				</ul>
			</section>
		</>,
	},
	{
		title: "[CG3207] FPGA Computer",
		description: "A 32-bit RISC computer at 50 MHz with 5 stage pipeline implemented in Verilog on a Xilinx Artix 7 FPGA.",
		img: cg3207_img,
		category: "embedded",
		markup:
		<>
			<h2>FPGA Computer</h2>
			<p>category: <em>embedded</em></p>
			<section className="project__article-box">
				<h3>Summary</h3>
				<ul>
					<li>A RISC computer implemented in <em>Verilog</em> on a Xilinx Artix 7 FPGA.</li>
					<li>Contains a <em>5 stage pipeline</em> - Fetch, Decode, Execute, Memory and Writeback.</li>
					<li>5 stage pipeline allows <em>reducing the critical path</em> and increasing the clock speeds to <em>50 MHz</em>.</li>
					<li>Assembly instructions are written in another IDE before it is assembled into a ROM that is synthesized as a bitstream.</li>
				</ul>
			</section>
		</>,
	},
	{
		title: "[EE4218] Neural Network Accelerator on FPGA",
		description: "This project contains a neural network accelerator implemented on an FPGA with C++ and Verilog.",
		img: ee4218_img,
		category: "embedded software",
		markup:
		<>
			<h2>Neural Network Accelerator on FPGA</h2>
			<p>category: <em>embedded software</em></p>
			<section className="project__article-box">
				<h3>Summary</h3>
				<p>This project contains a <em>neural network accelerator</em> implemented on FPGA with C++ and Verilog.</p>
				<ul>
					<li>The basic neural network is implemented in <em>C++</em>.</li>
					<li>A <em>hardware accelerator</em> is created by implementing the functionality in <em>Verilog, then synthesized to a bitstream</em>.</li>
					<li>The neural network is also written in <em>C++</em>, then synthesized to hardware using <em>High Level Synthesis (HLS)</em>.</li>
				</ul>
			</section>
		</>,
	},
]

export default project_data