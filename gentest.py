import os
import google.generativeai as genai

# Configure the API key
genai.configure(api_key="<your key>")


# Create the model with specified generation configurations
generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=generation_config,
)

def detect_fraud(content):
    """
    Detect fraud by asking the model to classify the input as SMS or email related.
    """
    # Start a chat session
    chat_session = model.start_chat(history=[])

    # Explicitly ask the model to classify the input type
    query = f"Does the following content seem like a message or email content and not a general query(reply in yes or no)?\n\nContent: {content}"
    
    # Send the classification request to the model
    classification_response = chat_session.send_message(query)

    # Extract the classification result
    classification_text = classification_response.text.lower()
    
    # Check if the content is classified as SMS or email
    if "yes" in classification_text :
        # Proceed with fraud detection since it's SMS or email related
        fraud_query = f"Is the following {classification_text} fraudulent (justify in brief)?\n\n{content}"
        fraud_response = chat_session.send_message(fraud_query)
        return fraud_response.text
    else:
        # If not classified as SMS or email, return a custom message
        return "Sorry, this doesn't seem to be related to SMS or email fraud."

# Example input
content="Congratulations! Youhave won 50 dollar giftcard from walmart."

# Detect fraud in different types of content
response = detect_fraud(content)


# Print the responses for each content type
print("Response:", response)

