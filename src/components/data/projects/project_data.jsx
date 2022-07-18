const project_data = [
	{
		title: "Neural Network Accelerator on FPGA",
		description: "This project contains a neural network accelerator implemented on FPGA with Verilog (HDL) and C++ (HLS).",
		img: 'https://github.com/iamchenjiajun.png',
		category: "embedded",
		markup:
		<>
			<h2>Neural Network Accelerator on FPGA</h2>
			<p>category: <em>embedded</em></p>
			<p>This project contains a neural network accelerator implemented on FPGA with Verilog (HDL) and C++ (HLS).</p>
		</>,
	},
	{
		title: "Minesweeper Duels",
		description: "24h hackathon project, 2 player real-time multiplayer built with socket.io and expressJS. Minesweeper Duels is a 2 player game where each player takes turns to reveal a space in the Minesweeper board. However, each player only has a limited amount of time, where it ticks down during your turn. Clicking on a mine deducts additional time.",
		img: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/325/940/datas/gallery.jpg',
		source: "https://github.com/iamchenjiajun/minesweeper-duels",
		demo: "https://minesweeper-royale.herokuapp.com/",
		category: "web",
		markup:
		<>
			<h2>Minesweeper Duels</h2>
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
]

export default project_data