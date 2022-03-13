'reach 0.1';// indicates that this is a reach program 

export const main = Reach.App(() => {// defines the main export of the program
    const Alice = Participant('Alice', {//participants of the application 
        // specify alice'sinteract interface here 
    });
    const Bob = Participant('Bob', {
        // specify Bobs Interact interface here
    });
    init();// marks deployment of the program, allows the program to start doing things 
    //write program here 
});