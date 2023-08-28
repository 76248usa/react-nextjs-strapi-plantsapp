import React, {useState} from 'react'
import Page from '@/components/Page'
import Input from '@/components/Input'
import Field from '@/components/Field'
import Button from '@/components/Button'
import { fetchJson } from '@/lib/api'
import { useRouter } from 'next/navigation';
import {useMutation, useQueryClient} from 'react-query'
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const queryClient = useQueryClient();

   const mutation = useMutation (() => fetchJson('/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    }));
    
  const handleSubmit = async (event) => {
    event.preventDefault()
   
    await sleep(2000);
    try {
     const user = mutation.mutateAsync()
     queryClient.setQueryData('user', user)
       router.push('/')
    } catch (error) {
      //mutation.isError is true  
    }  
  }
  return (
    <div>
      <Page title="Sign-In">
        <form onSubmit={handleSubmit}>
          <Field label="Email">     
            <Input type="email" value={email}
            onChange={(e) => setEmail(e.target.value)} />
          </Field>
           <Field label="Password">
            
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Field>
            {mutation.isError && <p className="text-red-700">Invalid Credentials</p>}
            {mutation.isLoading ? <p className="text-red-700">Loading...</p> : <Button type="submit">Sign In</Button>}           
        </form>
      </Page>
    </div>
  )
}

export default SignInPage