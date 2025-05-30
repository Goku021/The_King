from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index_page():
    try:
        return render_template('index.html')
    except Exception as e:
        return f"Error rendering index: {e}"


@app.route('/about')
def about_page():
    try:
        return render_template('about.html')
    except Exception as e:
        return f"Error rendering about: {e}"


app.run()
