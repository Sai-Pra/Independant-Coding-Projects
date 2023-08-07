import tkinter as tk
from PIL import ImageTk, Image

class DnDMapSimulator:
    def __init__(self):
        self.window = tk.Tk()
        self.window.title("DnD Map Simulator")
        self.window.geometry("800x600")

        # Load the map image
        self.map_image = Image.open("Map.png")
        self.map_image = self.map_image.resize((800, 600), Image.LANCZOS)
        self.map_photo = ImageTk.PhotoImage(self.map_image)
        self.map_label = tk.Label(self.window, image=self.map_photo)
        self.map_label.pack()

        # Load the character image
        self.character_image = Image.open("Character.png")
        self.character_image = self.character_image.resize((50, 50), Image.LANCZOS)
        self.character_photo = ImageTk.PhotoImage(self.character_image)
        self.character_label = tk.Label(self.window, image=self.character_photo)
        self.character_label.place(x=750, y=0)

        # Add the Load Character button
        load_character_button = tk.Button(self.window, text="Load Character", command=self.load_character)
        load_character_button.pack()

    def load_character(self):
        # Add the Resize and Crop buttons
        resize_button = tk.Button(self.window, text="Resize", command=self.resize_character)
        resize_button.place(x=750, y=50)

        crop_button = tk.Button(self.window, text="Crop", command=self.crop_character)
        crop_button.place(x=750, y=75)

        # Make the character image draggable
        self.character_label.bind("<Button-1>", self.start_drag)
        self.character_label.bind("<B1-Motion>", self.drag)

    def resize_character(self):
        # Add arrows to resize the character image
        if not hasattr(self, "resize_left_arrow"):
            # Add left arrow
            self.resize_left_arrow = tk.Label(self.window, text="<", font=("Arial", 16))
            self.resize_left_arrow.place(x=750, y=25)

            # Add right arrow
            self.resize_right_arrow = tk.Label(self.window, text=">", font=("Arial", 16))
            self.resize_right_arrow.place(x=800, y=25)

            # Add top arrow
            self.resize_top_arrow = tk.Label(self.window, text="^", font=("Arial", 16))
            self.resize_top_arrow.place(x=775, y=0)

            # Add bottom arrow
            self.resize_bottom_arrow = tk.Label(self.window, text="v", font=("Arial", 16))
            self.resize_bottom_arrow.place(x=775, y=50)

    def crop_character(self):
        # Allow users to crop the character image
        if not hasattr(self, "crop_rectangle"):
            # Create a rectangle for cropping
            x1 = 750
            y1 = 0
            x2 = 800
            y2 = 50

            self.crop_rectangle = self.map_label.create_rectangle(x1,
                                                                    y1,
                                                                    x2,
                                                                    y2,
                                                                    outline="red",
                                                                    dash=(4, 4))

            # Bind mouse events to the rectangle
            self.map_label.tag_bind(self.crop_rectangle,
                                    "<Button-1>",
                                    lambda event: setattr(self.crop_rectangle,
                                                          "start",
                                                          (event.x_root,
                                                           event.y_root)))

            self.map_label.tag_bind(self.crop_rectangle,
                                    "<B1-Motion>",
                                    lambda event: (self.map_label.coords(
                                        self.crop_rectangle,
                                        event.x_root,
                                        event.y_root)))

    def start_drag(self, event):
        # Highlight the character image when it is being dragged
        if not hasattr(self, "drag_highlight"):
            # Create a highlight rectangle around the character image
            x1 = event.x - 25
            y1 = event.y - 25
            x2 = event.x + 25
            y2 = event.y + 25

            self.drag_highlight = self.map_label.create_rectangle(x1,
                                                                   y1,
                                                                   x2,
                                                                   y2,
                                                                   outline="red",
                                                                   dash=(4, 4))

    def drag(self, event):
        # Move the character image while it is being dragged
        if hasattr(self, "drag_highlight"):
            dx = event.x - (self.drag_highlight.coords()[0] + 25)
            dy = event.y - (self.drag_highlight.coords()[1] + 25)

            new_x = self.character_label.winfo_x() + dx
            new_y = self.character_label.winfo_y() + dy

            # Check if the character image is within the boundaries of the map
            if 0 <= new_x <= 750 and 0 <= new_y <= 550:
                self.character_label.place(x=new_x, y=new_y)

    def run(self):
        self.window.mainloop()

app = DnDMapSimulator()
app.run()
