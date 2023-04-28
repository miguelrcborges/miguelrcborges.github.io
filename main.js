const dataBlock = document.querySelector("#page-content");

const infoElement = Info();
const projectsElement = Projects();
const connectionsElement = Connections();

const clearActiveButton = () => {
	const a = document.querySelector(".active");
	if (a)
		a.className = "";
}

const loadInfo = (e) => { 
	clearActiveButton();
	e.target.className = "active";
	dataBlock.replaceChildren(infoElement) 
};

const loadProjects = (e) => {
	clearActiveButton();
	e.target.className = "active";
	dataBlock.replaceChildren(projectsElement); 
}

const loadConnections = (e) => {
	clearActiveButton();
	e.target.className = "active";
	dataBlock.replaceChildren(connectionsElement); 
}

{
	const buttons = document.querySelectorAll("button");
	buttons[0].addEventListener('click', loadInfo);
	buttons[1].addEventListener('click', loadProjects)
	buttons[2].addEventListener('click', loadConnections)
}
