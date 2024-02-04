from Flyways import app
from Flyways.model import User, ContactInfo
from flask import redirect, url_for

from flask import  jsonify
import threading
import time
from flask import Blueprint

bp = Blueprint("main", __name__)

@app.route("/")
def home():
    return render_template("home.html")


@app.route("/signIn", methods=['get', 'post'])
def signIn():
    data = request.form.to_dict(flat=True)
    if data:
        user = User(Name=data["txt"], email=data["email"], Password=data["pswd"])
        user.SaveToDatabase()
        return redirect("/login")
    return render_template("signIn.html")


@app.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        data = request.form.to_dict(flat=True)
        if data:
            email = data["email"]
            password = data["pswd"]

            # Use the authenticate method to check credentials
            if User.authenticate(email, password):
                # Successful login, redirect to a dashboard or home page
                return redirect("/")
            else:
                # Incorrect credentials, you might want to display an error message
                return render_template("signIn.html", error="Invalid credentials")

    return render_template("signIn.html")


@app.route("/SearchBooking")
def search():
    return render_template("SearchBooking.html")


@app.route("/about")
def about():
    return render_template("AboutUs.html")


@app.route("/contact", methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get("name", "")
        phone = request.form.get("phone", "")
        message = request.form.get("message", "")

        print("Received data:", name, phone, message)  # Add this line for debugging
        if name and phone and message:
            # Save data to the database
            info = ContactInfo(Name=name, phoneNumber=phone, message=message)
            info.SaveToDatabase()
            # Redirect to prevent form resubmission
            return render_template("ContactUs.html", success_message="Your message sent successfully!!")

    return render_template("ContactUs.html")



@app.route("/flights")
def flights():
    return render_template("Flights.html")

@app.route("/searchedBookings")
def Search():
    return render_template("SearchBooking.html")

@app.route("/bookingform")
def Bookingform():
    return render_template("FlightBooking.html")

from flask import request, render_template

@app.route("/paymentmethods", methods=["GET", "POST"])
def PaymentMethods():
    if request.method == "POST":
        # Process the form data here if needed
        # Then redirect to another page or render a template
        return render_template("PaymentMethods.html")  # Update the template name as needed
    else:
        return render_template("PaymentMethods.html")


# Chatbot
from flask import Blueprint, render_template, request, jsonify
import threading
import time

bp = Blueprint("main", __name__)

class Chatbot:
    def __init__(self):
        self.chat_body = []
        self.previous_answer_bubble = None
        self.chat_lock = threading.Lock()

    def simulate_server_response(self, question):
        time.sleep(2)
        return f"Server response to '{question}'"

    def simulate_welcome_message(self):
        time.sleep(2)
        return "Welcome to the Airline Reservation System! "

    def simulate_generic_response(self):
        time.sleep(2)
        return "I'm sorry, I didn't understand that. Type 'hello' to start."

    def simulate_handle_question_selection(self, selected_question):
        time.sleep(2)
        responses = {
            "What flights are available today?": "We have flights available to various destinations today. Please provide more details, such as your departure city and destination, for accurate information.",
            "How do I make a reservation?": "To make a reservation, you can visit our website or contact our customer service. Let me know if you need assistance with a specific reservation.",
            "What is the baggage allowance?": "The baggage allowance varies depending on the airline and ticket class. Could you please specify the airline you are interested in?",
            "Can I change my reservation?": "Yes, you can typically change your reservation, but it depends on the airline's policy and the type of ticket you purchased. Please provide your reservation details for more information.",
        }
        return responses.get(selected_question, "I'm sorry, I didn't understand that question.")

    def display_bot_message(self, message):
        with self.chat_lock:
            bot_bubble = {"type": "bot", "content": message}
            self.chat_body.append(bot_bubble)
            self.previous_answer_bubble = bot_bubble

    def display_question(self, question):
        with self.chat_lock:
            question_bubble = {"type": "bot", "content": question, "is_question": True}
            self.chat_body.append(question_bubble)
            # Assume the user selects the question immediately after displaying it
            threading.Thread(target=self.handle_question_thread, args=(question,)).start()

    def handle_question_thread(self, selected_question):
        answer = self.simulate_handle_question_selection(selected_question)
        with self.chat_lock:
            self.display_bot_message(answer)

    def clear_previous_answer(self):
        with self.chat_lock:
            self.previous_answer_bubble = None

    def show_generic_response(self):
        self.clear_chat()
        with self.chat_lock:
            generic_response = self.simulate_generic_response()
            self.display_bot_message(generic_response)

    def show_welcome_message_and_questions(self):
        self.clear_chat()
        with self.chat_lock:
            welcome_message = self.simulate_welcome_message()
            self.display_bot_message(welcome_message)

            questions = [
                "What flights are available today?",
                "How do I make a reservation?",
                "What is the baggage allowance?",
                "Can I change my reservation?",
            ]

            for question in questions:
                self.display_question(question)

    def clear_chat(self):
        with self.chat_lock:
            self.chat_body.clear()
            self.previous_answer_bubble = None


chatbot_instance = Chatbot()

@bp.route("/Chatbot")
def index():
    return render_template("chatbot.html", chat_body=chatbot_instance.chat_body)

@bp.route("/send_message", methods=["POST"])
def send_message_route():
    user_input = request.form.get("user_input")

    if not user_input:
        return jsonify({"error": "User input is empty"})

    chatbot_instance.clear_previous_answer()
    with chatbot_instance.chat_lock:
        user_bubble = {"type": "user", "content": user_input}
        chatbot_instance.chat_body.append(user_bubble)

    if user_input.lower() == "hello":
        threading.Thread(target=chatbot_instance.show_welcome_message_and_questions).start()
    else:
        threading.Thread(target=chatbot_instance.show_generic_response).start()

    # Simulate delay for server response
    time.sleep(2)

    with chatbot_instance.chat_lock:
        response = [{"type": message["type"], "content": message["content"]} for message in chatbot_instance.chat_body]

    return jsonify({"chat_body": response})

if __name__ == "__main__":
    from flask import Flask
    app = Flask(__name__)
    app.register_blueprint(bp)
    app.run(debug=True)




@bp.route("/Chatbot")
def index():
    return render_template("chatbot.html", chat_body=chatbot_instance.chat_body)

@bp.route("/send_message", methods=["POST"])
def send_message_route():
    user_input = request.form.get("user_input")

    if not user_input:
        return jsonify({"error": "User input is empty"})

    chatbot_instance.clear_previous_answer()
    with chatbot_instance.chat_lock:
        user_bubble = {"type": "user", "content": user_input}
        chatbot_instance.chat_body.append(user_bubble)

    if user_input.lower() == "hello":
        chatbot_instance.show_welcome_message_and_questions()
    else:
        chatbot_instance.show_generic_response()

    # Simulate delay for server response
    time.sleep(2)

    with chatbot_instance.chat_lock:
        response = [{"type": message["type"], "content": message["content"]} for message in chatbot_instance.chat_body]

    return jsonify({"chat_body": response})


@app.route("/Chatbot")
def chat():
    return render_template("chatbot.html")