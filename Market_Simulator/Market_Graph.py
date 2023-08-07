import tkinter as tk
from tkinter import ttk
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
import json
import time
import threading
import matplotlib.animation as animation

class MarketGraphGUI:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("Market Graph")
        self.root.geometry("800x600")

        self.figure, self.ax = plt.subplots(figsize=(8, 5))
        self.graph_canvas = FigureCanvasTkAgg(self.figure, master=self.root)
        self.graph_canvas.get_tk_widget().pack(side=tk.TOP, fill=tk.BOTH, expand=True)

        self.current_price = 50000  # Start with the initial price from config
        self.anim = None

        self.root.mainloop()

    def update_graph(self, i):
        self.ax.clear()
        self.ax.plot([0], [self.current_price], marker='o', markersize=5, color='blue')
        self.ax.set_title("Market Graph")
        self.ax.set_xlabel("Time")
        self.ax.set_ylabel("Price")
        self.ax.grid(True)
        self.graph_canvas.draw()

    def start_animation(self):
        self.anim = animation.FuncAnimation(self.figure, self.update_graph, interval=1000)
        self.root.after(1000, self.market_maker)

    def market_maker(self):
        # Read the start price from the config file
        with open('config.json', 'r') as config_file:
            config_data = json.load(config_file)
            start_price = config_data.get("Start price", 50000)

        self.current_price = start_price
        while True:
            # Implement the market maker behavior here to update the price
            # For simplicity, let's simulate random price fluctuations
            self.current_price += (0.5 - 1.0 * time.time() % 1) * 50
            time.sleep(1)  # Simulate a price update every second

# Example usage:
if __name__ == "__main__":
    gui = MarketGraphGUI()
    gui.start_animation()
    gui.root.mainloop()
