import React from 'react';

const Navbar = () => {
    return (
      <div>
        <div className="navbar border-indigo-600 border-b-2">
          <div className="flex-1">
            <a href='/' className="btn btn-ghost normal-case text-xl invisible hover:visible hover:bg-slate-600">Pro Adda</a>
          </div>
          <div className="flex-none">
            <ul className="flex gap-1 md:gap-3">
              <li>
                <a>Item 1</a>
              </li>
       
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;