import React from 'react'
const Login = () => {
    return (
        <div>
            <div className="git_container" style={{backgroundColor:'pink', margin:'20px', padding:'20px'}}>

                <h1>1. Adding new repository and push the code</h1>
                <br />
                1. git init  --------->initialize the repo
                <br />
                2. git remote add origin -------->repositor-path
                <br />
              
	             3. git status --> to know the status of code,kaun sa file change hua hai, kya new create hua hai etc.
                <br />

                4. git add .
                <br />
                5. git commit -m "your message"
                <br />
	            6. git branch -a ----> to check the branches
                <br />
	            7. git checkout -b main ---> create new branch 'main'
                <br />
                8. git pull origin main --allow-unrelated-hisotries
                <br />
                9. git push origin main  ----> that's it
                <br />
                <br />
                9. download github cli for windeo than below opearion
                9. gh repo edit "mdintezaralam/next-snake-game" --description "This is " ---->  to modify or add the description in github repo
                <br />
                <br />
                <p>Netlify Error</p>
                step 1:
                create _redirects file in public and add the following line

                <p>if i want to host my app in netlify we have to create in public folder _redirects.html file and paste this below</p>
                 /* /index.html 200
    </div>
    </div>
  )
}

export default Login
