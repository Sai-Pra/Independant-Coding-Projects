import tkinter as tk
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg

class MarketGraphGUI:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("Market Graph")
        self.root.geometry("800x600")

        self.figure, self.ax = plt.subplots(figsize=(8, 5))
        self.graph_canvas = FigureCanvasTkAgg(self.figure, master=self.root)
        self.graph_canvas.get_tk_widget().pack(side=tk.TOP, fill=tk.BOTH, expand=True)

        self.prices = []  # List to store market prices

        self.root.after(1000, self.update_graph)  # Call update_graph every 1000ms (1 second)

        self.root.mainloop()

    def update_graph(self):
        # Retrieve the latest market price from the market maker (replace this with actual implementation)
        latest_price = self.get_latest_market_price()
        self.prices.append(latest_price)

        self.ax.clear()
        self.ax.plot(range(len(self.prices)), self.prices, marker='o', markersize=5, color='blue')
        self.ax.set_title("Market Graph")
        self.ax.set_xlabel("Time")
        self.ax.set_ylabel("Price")
        self.ax.grid(True)
        self.graph_canvas.draw()

        self.root.after(1000, self.update_graph)  # Schedule the next update after 1000ms (1 second)

    def get_latest_market_price(self):
        # Replace this function with your actual implementation to get the latest market price from the market maker
        # For this example, I'm using a random price between 49500 and 50500
        import random
        return random.randint(49500, 50500)

if __name__ == "__main__":
    gui = MarketGraphGUI()
