import axios from 'axios'
export const register = user=>{
    return axios
    .post('users/register',{
        first_name:user.first_name,
        //last_name:newUser.last_name,
        email:user.email,
        password:user.password
    }).then(res=>{
        return res.data
    }).catch(err=>{
        return err
    })
}