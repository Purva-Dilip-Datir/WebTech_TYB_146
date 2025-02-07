document.getElementById("contactForm").addEventListener("submit", function(event) 
{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") 
	{
        alert("All fields are required!");
        event.preventDefault();
    } 
	else if (!/\S+@\S+\.\S+/.test(email)) 
	{
        alert("Invalid email format!");
        event.preventDefault();
    } 
	else 
	{
        alert("Message Sent Successfully!");
    }
});
