import os
import openai
import speech_recognition
import time
from flask import Flask, redirect, render_template, request, url_for, request, make_response
from werkzeug.wrappers import Request, Response
# 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
app = Flask(__name__)
openai.api_key = "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"

UserVoiceInput_converted_to_Text = ""

@app.route("/", methods=("GET", "POST"))
def index():
    
    if request.method == "POST":

        UserVoiceRecognizer = speech_recognition.Recognizer()
        start_time = time.time()
        end_time = start_time + 10
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
            model="text-davinci-003",
            prompt=generate_prompt(question),
            temperature=0.6,
            max_tokens=256,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0
        )
        return render_template("index.html", result=response.choices[0].text)

    result = request.args.get("")
    return render_template("index.html", result=result)


def generate_prompt(question):
    return """The following is a question; respond to it in the most in depth manner you can: {}""".format(
        question.capitalize()
    )

