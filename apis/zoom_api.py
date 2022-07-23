#####################---REQUIREMENTS---####################
# pip install zoom
# pip install django-zoom-meetings
# pip install pyjwt
# pip install requests


import jwt
import datetime
import requests
import json

#current time
time_now = datetime.datetime.now()

#expiration time for zoom link
expiration_time = time_now + datetime.timedelta(hours=1)
round_off_exp_time = round(expiration_time.timestamp())

headers = { "alg" : "HS256", "typ" : "JWT"}
payload = { "iss" : "YTmEwub_ROyYQzN-TCQ6pA",  "exp" : round_off_exp_time}
encoded_jwt = jwt.encode(payload, "aa05qIiSkqR3Y7KPOWMBtY7fYp3IO7iOOWq6", algorithm="HS256")
email = "anirudhmukkamala@gmail.com"

url = "https://api.zoom.us/v2/users/{}/meetings".format(email) 
strt_time = datetime.datetime(2022,7,23,10,45).strftime("%Y-%m-%dT%H:%M:%Sz");
#obj consists of the meeting settings  (duration in meetings)
obj = {"topic" : "Test Meeting", "starttime" : strt_time, "duration" : 30, "password" : "12345"}
header = {"authorization" : "Bearer {}".format(encoded_jwt)}
create_meeting = requests.post(url, json=obj, headers=header)

#result
print(create_meeting.text)