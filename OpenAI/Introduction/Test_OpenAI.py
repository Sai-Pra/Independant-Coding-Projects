import os
import openai

openai.api_key = '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'

response = openai.Completion.create(
  model="text-davinci-003",
  prompt="Write a tagline for an icecream shop\n\n\"Cool off with our delicious icecream!\"",
  temperature=0.7,
  max_tokens=256,
  top_p=1,
  frequency_penalty=0,
  presence_penalty=0
)