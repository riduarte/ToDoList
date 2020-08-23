import React, { useState } from "react";

//create your first component
export function BlogNotes() {
	const [title, setTitle] = useState([]);
	const [item, setItem] = useState(0);

	const addTask = e => {
		if (e.key === "Enter") {
			setTitle([...title, e.target.value]);
			setItem(item + 1);
			e.target.value = "";
		}
	};
	const removeTask = e => {
		let removeTaks = [...title];
		removeTaks.splice(e, 1);
		setItem(item - 1);
		return setTitle(removeTaks);
	};

	return (
		<div className="container">
			<div className="bg-light offset-2 col-8 mt-5 rounded border shadow">
				<h1 className="text-center">Diligence´s</h1>
				<div className="ml-3">
					<label className="font-weight-bold">New task :</label>
					<input
						onKeyPress={e => addTask(e)}
						className="ml-1 border-0"
						type="text"
					/>
				</div>
				<ol>
					{title.map((task, index) => {
						return (
							<li
								className="d-flex border justify-content-sm-between p-2 align-items-center"
								key={index}>
								<span className="text-muted">{task}</span>
								<span
									onClick={() => {
										removeTask(index);
									}}
									className="text-danger">
									<i
										className="fa fa-times"
										aria-hidden="true"
									/>
								</span>
							</li>
						);
					})}
				</ol>
				<footer className="border-top row p-2"> {item} task </footer>
			</div>
		</div>
	);
}
