
import * as vscode from 'vscode';

let myStatusBarItem : vscode.StatusBarItem
let itemSettings = vscode.workspace.getConfiguration("statusBarCustomItem")
let colorSettings = vscode.workspace.getConfiguration("statusBarCustomColor")

export function activate(context: vscode.ExtensionContext) {
  myStatusBarItem = vscode.window.createStatusBarItem(
	vscode.StatusBarAlignment.Left,100000
  )


	context.subscriptions.push(myStatusBarItem);

	updateStatusBar(context)

 function updateStatusBar(context : vscode.ExtensionContext){

	let name = itemSettings.get("text") as string
	let icon = itemSettings.get("icon") as string
	let tooltip = itemSettings.get("tooltip") as string

	myStatusBarItem.text= `${icon} ${name}`
	myStatusBarItem.tooltip = `${tooltip}` 
	myStatusBarItem.show()
 }
}

export function deactivate() {}
