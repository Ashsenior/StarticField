import React from 'react'
import './Terms_conditions.css'

export const  TermsConditons= () => {
  function hello() {
    console.log('this page is working')
  }
  return (
    <div className='bodyone' onClick={hello}>
    <div className="term-sheet">
        <div className="term-text">
            <h2>
                Term and condition
            </h2>
            <p>
            An Intellectual Property clause will inform users that the contents, logo and other visual media you created is your property and is protected by copyright laws.
            A Termination clause will inform users that any accounts on your website and mobile app, or users' access to your website and app, can be terminated in case of abuses or at your sole discretion.
            A Governing Law clause will inform users which laws govern the agreement. These laws should come from the country in which your company is headquartered or the country from which you operate your website and mobile app.
            A Links to Other Websites clause will inform users that you are not responsible for any third party websites that you link to. This kind of clause will generally inform users that they are responsible for reading and agreeing (or disagreeing) with the Terms and Conditions or Privacy Policies of these third parties.
            If your website or mobile app allows users to create content and make that content public to other users, a Content clause will inform users that they own the rights to the content they have created. This clause usually mentions that users must give you (the website or mobile app developer/owner) a license so that you can share this content on your website/mobile app and to make it available to other users.
            Because the content created by users is public to other users, a DMCA notice clause (or Copyright Infringement ) section is helpful to inform users and copyright authors that, if any content is found to be a copyright infringement, you will respond to any DMCA takedown notices received and you will take down the content.
            A Limit What Users Can Do clause can inform users that by agreeing to use your service, they're also agreeing to not do certain things. This can be part of a very long and thorough list in your Terms and Conditions agreement so as to encompass the most amount of negative uses.
            </p>
        </div>
        <div className="disclaimer">
            <h4>I have read the above mentioned terms and condition</h4>
        </div>
        <div className="button">
            <button className="btn red-btn">Accept</button>
            <button className="btn gray-btn">Deny</button>
        </div>
    </div>
    </div>
  )
}
