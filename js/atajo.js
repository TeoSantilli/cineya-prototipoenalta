window.addEventListener('load',function(){
    const signupForm = document.getElementById('reg-form')
    signupForm.addEventListener('submit', registerUser)

    async function registerUser(event) {
        event.preventDefault()

        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        const result = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'aaplication/json'
            },
            body: JSON.stringify({
                name,email,password
            })
        }).then((res) => res.json())
        
        console.log(result)
    }
})