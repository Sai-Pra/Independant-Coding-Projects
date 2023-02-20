import os
import openai
import speech_recognition
import time
from flask import Flask, redirect, render_template, request, url_for, request, make_response
from werkzeug.wrappers import Request, Response
app = Flask(__name__)
openai.api_key = "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"

UserVoiceInput_converted_to_Text = "Respond with 'No question entered'"
UserVoiceRecognizer = speech_recognition.Recognizer()

#if request.form['submit_button'] == 'Do Something':

@app.route("/", methods=("GET", "POST"))
def index():
    if request.method == "POST":
        if request.form['submit'] == 'Adjust for Ambient Sounds':
            try:
                with speech_recognition.Microphone() as UserVoiceInputSource:
                    UserVoiceRecognizer.adjust_for_ambient_noise(UserVoiceInputSource, duration=1)
                    print("LOAD AMBIENCE")
                    return render_template("listen_voice.html", waitImg='true')
            except KeyboardInterrupt:
                #print('A KeyboardInterrupt encountered; Terminating the Program !!!')
                exit(0)
            except speech_recognition.UnknownValueError:
                print("No User Voice detected OR unintelligible noises detected OR the recognized audio cannot be matched to text !!!")
        elif request.form['submit'] == 'Type Question Manually':
            return render_template("manual_question.html", waitImg='true')
    return render_template("index.html", waitImg='true') 


@app.route("/listen", methods=("GET", "POST"))
def listen():
    if request.method == "POST":
        end_time = time.time() + 30
        while(time.time() < end_time):
            try:
                with speech_recognition.Microphone() as UserVoiceInputSource:
                    UserVoiceRecognizer.adjust_for_ambient_noise(UserVoiceInputSource, duration=1)
                        # The Program listens to the user voice input.
                    UserVoiceInput = UserVoiceRecognizer.listen(UserVoiceInputSource)
        
                    UserVoiceInput_converted_to_Text = UserVoiceRecognizer.recognize_google(UserVoiceInput)
                        #UserVoiceInput_converted_to_Text = UserVoiceInput_converted_to_Text.lower()
                    print(UserVoiceInput_converted_to_Text)
                    break 
            except KeyboardInterrupt:
                    #print('A KeyboardInterrupt encountered; Terminating the Program !!!')
                exit(0)
            except speech_recognition.UnknownValueError:
                print("No User Voice detected OR unintelligible noises detected OR the recognized audio cannot be matched to text !!!")
        question = UserVoiceInput_converted_to_Text
        response = openai.Completion.create(
            model="text-curie-001",
            prompt=generate_prompt(question),
            temperature=0.6,
            max_tokens=256,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0
        )
    return render_template("respond.html", result=response.choices[0].text)

@app.route("/manual", methods=("GET", "POST"))
def manual_type():
    if request.method == "POST":
        question = request.form["Your Question"]
        response = openai.Completion.create(
            model="text-curie-001",
            prompt=generate_prompt(question),
            temperature=0.6,
            max_tokens=256,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0
        )
    return render_template("respond.html", result=response.choices[0].text)

@app.route("/respond", methods =("GET","POST"))
def respond():
    return render_template("index.html")
    result = request.args.get("")
    return render_template("index.html", result=result)

def tell_user_to_wait():
    #print("WAIT!!!")
    return render_template("index.html", waitImg='<img src="dog.png" alt="dog">')

def generate_prompt(question):
    return """The following is a question; respond to it in the most in depth manner you can: {}""".format(
        question.capitalize()
    )


