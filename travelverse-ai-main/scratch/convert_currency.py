import re
import os
import sys

# Set standard streams to UTF-8 to handle unicode safely if supported, or fall back to safe printing
try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

# Files to replace currency symbol: $ to Rupee (excluding ${ )
files_to_convert = [
    "src/components/DestinationCard.jsx",
    "src/components/FlightCard.jsx",
    "src/components/HotelCard.jsx",
    "src/components/TourCard.jsx",
    "src/pages/Dashboard.jsx",
    "src/pages/AITripPlanner.jsx",
    "src/pages/DestinationDetails.jsx",
    "src/pages/Home.jsx",
    "src/pages/Destinations.jsx",
    "src/pages/Flights.jsx",
    "src/pages/Hotels.jsx",
    "src/pages/TourPackages.jsx",
    "src/context/AppContext.jsx"
]

def convert_symbols():
    print("=== Converting Currency Symbols (USD -> INR) ===")
    pattern = re.compile(r'\$(?!\{)')
    rupee_symbol = '\u20b9'
    
    for relative_path in files_to_convert:
        # Convert path to system path
        relative_path = relative_path.replace('/', os.sep)
        absolute_path = os.path.abspath(relative_path)
        if not os.path.exists(absolute_path):
            print(f"File not found: {relative_path}")
            continue
            
        with open(absolute_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content, count = pattern.subn(rupee_symbol, content)
        if count > 0:
            with open(absolute_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {relative_path}: replaced {count} symbols.")
        else:
            print(f"No changes in {relative_path}.")

def scale_mock_data():
    print("\n=== Scaling mockData.js Prices (x80) ===")
    path = os.path.abspath(os.path.join("src", "data", "mockData.js"))
    if not os.path.exists(path):
        print("mockData.js not found!")
        return
        
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    price_pattern = re.compile(r'(price|originalPrice):\s*(\d+)')
    
    def multiplier(match):
        key = match.group(1)
        val = int(match.group(2))
        return f"{key}: {val * 80}"
        
    new_content, count = price_pattern.subn(multiplier, content)
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f"Updated mockData.js: multiplied {count} prices by 80.")

if __name__ == "__main__":
    convert_symbols()
    scale_mock_data()
    print("=== Currency conversion complete! ===")
