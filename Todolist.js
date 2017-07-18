// Code goes here

 var todoList = 
       {
                     //store an array in todolistobject
              todo :[], 
              
                     addtodo: function(todotext)  //add todo
              {
                     this.todo.push(
                     {
                          todotext :todotext,
                          completed: false
                       });
              },

                    changetodo : function(position,todotext )  //change todo
              {
                     this.todo[position].todotext = todotext;

              },
                      deletetodo : function(position)  //delete todo
              {
                     this.todo.splice(position, 1);
              },
                     togglecompleted : function(position)  //togglecompleted
                     {
                            var todo = this.todo[position];
                            todo.completed = !todo.completed;
                     },
                     toggleall : function() //toggleall
                     {
                      var totaltodo = this.todo.length;
                      var i , completedtodo = 0;
                      for(i = 0 ; i < totaltodo ; i++)
                      {
                        if(this.todo[i].completed === true)
                        {
                          completedtodo++;
                        }
                      }
                      if(completedtodo === totaltodo)
                      {
                        for(i = 0; i <totaltodo ; i++)
                        {
                          this.todo[i].completed = false;
                        }
                      }else
                      {
                        for(i = 0; i <totaltodo ; i++)
                        {
                          this.todo[i].completed = true;
                        }

                      }

                     }
       };
           var handlers =
           {
          
            addtodo : function()
                {
                    var addtodotextinput = document.getElementById("addtodotextinput");
                    todoList.addtodo(addtodotextinput.value);
                    addtodotextinput.value ="";
                    view.displaytodo();
                },
            changetodo : function()
            {
                    var changetodopositioninput = document.getElementById("changetodopositioninput");
                    var changetodotextinput = document.getElementById("changetodotextinput");
                    todoList.changetodo(changetodopositioninput.valueAsNumber , changetodotextinput.value);
                    changetodopositioninput.value = '';
                    changetodotextinput.value = '';
                    view.displaytodo();
              
            },
            deletetodo : function()
            {
                    var deletetodopositioninput = document.getElementById("deletetodopositioninput");
                    todoList.deletetodo(deletetodopositioninput.valueAsNumber);
                    deletetodopositioninput.value = "";
                    view.displaytodo();
            },
            togglecompleted : function()
            {
               var togglecompletedtodopositioninput = document.getElementById("togglecompletedtodopositioninput");
               todoList.togglecompleted(togglecompletedtodopositioninput.valueAsNumber);
               togglecompletedtodopositioninput.value = '';
               view.displaytodo();
            },
             toggleall : function()
                {
                   todoList.toggleall();
                   view.displaytodo();
                }
           };
           var view = 
           {
                displaytodo :  function()
                {
                  var todoul = document.querySelector('ul');
                  todoul.innerHTML = '';
                  for(var i = 0 ; i < todoList.todo.length ; i++)
                  {
                    var todoli = document.createElement('li');
                    var todo = todoList.todo[i];
                    var todotextwithcompletion = '';
                    if(todo.completed === true)
                    {
                      todotextwithcompletion = '(X) ' + todo.todotext;
                     todoli.textContent = todotextwithcompletion;
                    }else
                    {
                      todotextwithcompletion = '() ' + todo.todotext;
                     todoli.textContent = todotextwithcompletion;
                    }
                    // todli.textContent = todoList.todo[i].todotext;
                    todoul.appendChild(todoli);
                  }
                }
           };
