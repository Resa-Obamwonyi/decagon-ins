export const getMessage = (message: string) =>{
    let msg;
    switch (message) {
        case "message1":
            msg = "Thank you for your interest in the Decagon Software Engineering Training Program. Your application has been submitted and is being reviewed. A mail has been sent to your email address that provides information on the recruitment process."
            break;
    
        case "message2":
            msg = "Thank you for your interest in the Decagon Software Engineering Training Program. Your application has been submitted and we will be in touch with you when the next recruitment cycle begins. A mail has been sent to your email address to get you familiar with our recruiting cycle."
            break;

        case "updateMessage":
            msg = "You have Successfully updated your application."
            break;
      
        default:
            msg = ""
            break;
    }
    return msg
}