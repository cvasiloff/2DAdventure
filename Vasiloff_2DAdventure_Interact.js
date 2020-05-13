/*
Name: Cameron Vasiloff
Assignment: 2D Adventure
Description: Use Context 2D to create a game that has a player kill enemies
Due Date: January 19, 2020

Files Included: Vasiloff_2DAdventure.html, Vasiloff_2DAdventure_Interact.js
Images Included: img/player.png, img/monster1.png, img/monster2.png, img/monster3.png
*/
class Player
		{
			//X, Y, Max HP, Current HP, Attack, Defense, Image, Type
			constructor(xc, xy, mhp, hp, atk, def, img, type)
			{
				this.x = xc;
				this.y = xy;
				this.mhp = mhp;
				this.hp = hp;
				this.atk = atk;
				this.def = def;
				this.img = img;
				this.type = type;
				this.renderPlayer();
				
			}
			
			//Updates health of entity
			healthChange(c)
			{
				//Damage Information
				this.damageModify = Math.floor(Math.random()*6)+1;
				this.damageBase = 1;
				
				switch(c)
				{
					//Attack the player (Case 1)
					case 1:
						//Attacked by Monster 1
						if(this.type == 30)
						{
							if((this.atk - myMain.p.def) >= 1)
								this.damageBase = this.atk - myMain.p.def;
							
							myMain.p.hp -= this.damageBase * this.damageModify;
							console.log("The Monster takes a bite out of you!");
							console.log("Damage Taken:", this.damageBase * this.damageModify);
							console.log("Current Health:", myMain.p.hp);
							
							//Player Loses
							if(myMain.p.hp <= 0)
							{
								myMain.renderAll();
								myMain.writeMe.innerHTML = "Game Over";
							}
						}
						
						//Attacked by Monster 2
						if(this.type == 31)
						{
							if((this.atk - myMain.p.def) >= 1)
								this.damageBase = this.atk - myMain.p.def;
							
							myMain.p.hp -= this.damageBase * this.damageModify;
							console.log("The Monster looks at you with an evil glare");
							console.log("Damage Taken:", this.damageBase * this.damageModify);
							console.log("Current Health:", myMain.p.hp);
							
							//Player Loses
							if(myMain.p.hp <= 0)
							{
								myMain.renderAll();
								myMain.writeMe.innerHTML = "Game Over";
							}
						}
						
						//Attacked by Monster 3
						if(this.type == 32)
						{
							if((this.atk - myMain.p.def) >= 1)
								this.damageBase = this.atk - myMain.p.def;
							
							myMain.p.hp -= this.damageBase * this.damageModify;
							console.log("The Monster sneezes on you and inflicts poison damage");
							console.log("Damage Taken:", this.damageBase * this.damageModify);
							console.log("Current Health:", myMain.p.hp);
							
							//Player Loses
							if(myMain.p.hp <= 0)
							{
								
								myMain.renderAll();
								myMain.writeMe.innerHTML = "Game Over";
							}
						}
						
						
						break;
					
					//Pick up a  potion
					case 22:
						console.log("You drink the questionable beverage and question your sanity.");
						console.log("HP Restored:", (this.mhp - this.hp),);
						this.hp = this.mhp;
						break;
						
					//Attack Monster 1
					case 30:
						if(this.type == 1)
						{
							if((this.atk - myMain.m1.def) >= 1)
								this.damageBase = this.atk - myMain.m1.def;
							
							console.log("You swing at the beast!");
							console.log("Damage Dealt:", this.damageBase * this.damageModify);
							myMain.m1.hp -= this.damageBase * this.damageModify;
							myMain.renderAll();
							
							//Player Wins
							if(myMain.m1.hp <= 0 && myMain.m2.hp <= 0 && myMain.m3.hp <=0)
							{
								myMain.renderAll();
								myMain.writeMe.innerHTML = "You Win!";
							}
							
						}
						
	
						break;
					
					//Attack Monster 2
					case 31:
						if(this.type == 1)
						{
							if((this.atk - myMain.m2.def) >= 1)
								this.damageBase = this.atk - myMain.m2.def;
							
							console.log("You laugh at the monster for no reason. Diabolical.");
							console.log("Damage Dealt:", this.damageBase * this.damageModify);
							myMain.m2.hp -= this.damageBase * this.damageModify;
							myMain.renderAll();
							
							//Player Wins
							if(myMain.m1.hp <= 0 && myMain.m2.hp <= 0 && myMain.m3.hp <=0)
							{
								myMain.renderAll();
								myMain.writeMe.innerHTML = "You Win!";
							}
						}

						break;
					//Attack Monster 3
					case 32:
						if(this.type == 1)
						{
							if((this.atk - myMain.m3.def) >= 1)
								this.damageBase = this.atk - myMain.m3.def;
							
							console.log("You laugh at the monster for no reason. Diabolical.");
							console.log("Damage Dealt:", this.damageBase * this.damageModify);
							myMain.m3.hp -= this.damageBase * this.damageModify;
							myMain.renderAll();
							
							//Player Wins
							if(myMain.m1.hp <= 0 && myMain.m2.hp <= 0 && myMain.m3.hp <=0)
							{
								myMain.renderAll();
								myMain.writeMe.innerHTML = "You Win!";
							}
						}
						break;
						
					//Nothing
					default: 
						break;

				}
			}
			
			//Draw entity on the board
			renderPlayer()
			{
				if(this.hp > 0)
				{
					var pic = document.getElementById(this.img);
					ctx.drawImage(pic,this.x*64,this.y*64);
					this.renderHealth();
				}
			}
			
			//Draw entity health bar
			renderHealth()
			{
				if(this.hp > 0)
				{
					this.currHealthDisplay =  (this.hp*64)/100;
					ctx.fillStyle = "magenta";
					ctx.fillRect(this.x*64,this.y*64+2,this.currHealthDisplay,6);
				}
				
				
			}
			
			//Checks what the entity is moving to
			moveGeneral(loc)
			{
				switch(loc)
				{
					case 1:
						if(this.type != 1)
						{
							if(this.type == 30)//Monster 1 Attacks
								this.healthChange(1);
							
							else if(this.type == 31)//Monster 2 Attacks
								this.healthChange(1);
							
							else if(this.type == 32)//Monster 3 Attacks
								this.healthChange(1);
							
						}
						break;
						
					case 10://Encounter Wall
						if(this.type == 1)
							console.log("A pile of bricks block you!");	
						break;
						
					case 11://Encounter Tree
						if(this.type == 1)
							console.log("A stubborn tree intimidates you!");
						break;
						
					case 22://Encounter Potion [Health changed in movement and im scared to move it here, sorry]
						if(this.type == 1)
							return 1;
						break;
						
					case 30://Encounter Monster 2
						if(this.type == 1)
							this.healthChange(30);						
						break;
						
					case 31://Encounter Monster 3
						if(this.type == 1)
							this.healthChange(31);
						break;
						
					case 32://Encounter Wall
						if(this.type == 1)
							this.healthChange(32);	
						break;
						
					default: //Encounter free space
						return 1;
				}

				myMain.renderAll();
				
			}
			
			moveLeft()
			{
				//Checks the position to your left
				this.moveTo = myMain.mazeArray[this.x-1][this.y];
				if(this.moveGeneral(this.moveTo))
				{
					this.healthChange(this.moveTo);
					if(this.hp > 0)
					{
						//Update position and reset old position
						myMain.mazeArray[this.x-1][this.y] = this.type;
						myMain.mazeArray[this.x][this.y] = 0;
						this.x--;
						
						//Only show when player moves, to reduce clutter in console
						if(this.type == 1)
							console.log("Moving Left!", this.x, this.y);
						
						myMain.renderAll();
					}
				}
			}
			
			
			moveUp()
			{
				//Checks the position above you
				this.moveTo = myMain.mazeArray[this.x][this.y-1];
				if(this.moveGeneral(this.moveTo))
				{
					this.healthChange(this.moveTo);
					
					if(this.hp > 0)
					{
						//Update position and reset old position
						myMain.mazeArray[this.x][this.y-1] = this.type;
						myMain.mazeArray[this.x][this.y] = 0;
						this.y--;
						
						//Only show when player moves, to reduce clutter in console
						if(this.type == 1)
							console.log("Moving Up!", this.x, this.y);
						
						myMain.renderAll();
					}
				}	
			}
			
			//Checks the position to your right
			moveRight()
			{
				this.moveTo = myMain.mazeArray[this.x+1][this.y];
				if(this.moveGeneral(this.moveTo))
				{
					this.healthChange(this.moveTo);
					
					if(this.hp > 0)
					{
						//Update position and reset old position
						myMain.mazeArray[this.x+1][this.y] = this.type;
						myMain.mazeArray[this.x][this.y] = 0;
						this.x++;
						
						//Only show when player moves, to reduce clutter in console
						if(this.type == 1)
							console.log("Moving Right!", this.x, this.y);
						
						myMain.renderAll();
					}
				}
			}
			
			//Checks the position below you
			moveDown()
			{
				this.moveTo = myMain.mazeArray[this.x][this.y+1];
				
				
				if(this.moveGeneral(this.moveTo))
				{
					this.healthChange(this.moveTo);
					
					//Update position and reset old position
					if(this.hp > 0)
					{
						myMain.mazeArray[this.x][this.y+1] = this.type;
						myMain.mazeArray[this.x][this.y] = 0;
						this.y++;
						
						//Only show when player moves, to reduce clutter in console
						if(this.type == 1)
							console.log("Moving Down!", this.x, this.y);
						
						myMain.renderAll();
					}
				}
			}

		}

class Monster extends Player
{
	constructor(xc, xy, mhp, hp, atk, def, img, type)
	{
		super(xc, xy, mhp, hp, atk, def, img, type);
	}
	
	//Move the monster
	update()
	{
		//The most intelligent AI you have ever laid eyes on
		this.direction = Math.floor(Math.random()*9)+1
		
		if(this.hp > 0)
		{
			switch(this.direction)
			{
				case 1:
				case 5:
					this.moveLeft();
					break;
					
				case 2:
				case 6:
					this.moveUp();
					break;
						
				case 3:
				case 7:
					this.moveRight();
					break;
						
				case 4:
				case 8:
					this.moveDown();
					break;
						
				default: //Don't move, rare chance
					break;			
			}
		}
		
		//Clear space and change it to blank
		else
		{
			myMain.mazeArray[this.x][this.y] = 0;
		}
	}
}

//The Logic of the movement	
document.onkeydown = checkKey;
function checkKey(event) {

	event = event || window.event;
	if(myMain.p.hp > 0)
	{
		if (event.keyCode == "37")//Move Left 
		{
			myMain.p.moveLeft();
			myMain.updateAll();
		}
		else if (event.keyCode == "38")//Move Up 
		{
			myMain.p.moveUp();
			myMain.updateAll();
		}
		else if (event.keyCode == "39")//Move Right 
		{
			myMain.p.moveRight();
			myMain.updateAll();
		}
		else if (event.keyCode == "40")//Move Down
		{
			myMain.p.moveDown();
			myMain.updateAll();
		}
	}
}





//You found me
//👀
//👃
//👄