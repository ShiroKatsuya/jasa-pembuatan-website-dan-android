import os
from http.server import SimpleHTTPRequestHandler


class handler(SimpleHTTPRequestHandler):
    # Serve files from the project root (repo root), not the api/ directory
    def __init__(self, *args, **kwargs):
        project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        super().__init__(*args, directory=project_root, **kwargs)


