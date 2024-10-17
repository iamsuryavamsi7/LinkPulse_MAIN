import React, { useRef } from 'react';
import Tree from 'react-d3-tree';

const TreeC = ({ data }) => {
    const treeRef = useRef(null);

    // Handling node click logic
    const handleNodeClick = (nodeData) => {
        console.log('Clicked node:', nodeData);
    };

    // Render custom node as a rectangle with data inside
    const renderRectNode = ({ nodeDatum }) => (
        <g>
            {/* Rectangle for the node */}
            <rect
                width="180"
                height="50"
                x="-90" // Center the rectangle horizontally around the node
                y="-25" // Center the rectangle vertically around the node
                fill="lightblue" // Background color of the rectangle
                stroke="black" // Border color
                strokeWidth="0"
                rx="10" // Rounded corners for better visuals
                ry="10"
            />
            {/* Text inside the rectangle */}
            <text
                fill="black"
                strokeWidth="1"
                x="0"
                y="0"
                textAnchor="middle" // Align text to the center
                alignmentBaseline="middle" // Center text vertically
                fontSize="14"
                letterSpacing={2}
                
            >
                {nodeDatum.name}
            </text>
        </g>
    );

    return (
        <div id="treeWrapper" style={{ width: '100%', height: '720px' }} ref={treeRef}>
            <Tree
                data={data}
                orientation="vertical" // Set orientation to vertical
                translate={{ x: 600, y: 200 }} // Adjust values to center the tree
                onNodeClick={handleNodeClick}
                renderCustomNodeElement={renderRectNode} // Use custom node rendering
                nodeSize={{ x: 200, y: 100 }} // Node box dimensions
                transitionDuration={500} // Duration of transitions (500ms)
                transitionEase="easeCubic" // Easing function for smooth transitions
                pathFunc="diagonal" // Style for connecting lines (elbow, straight, diagonal)
            />
        </div>
    );
};

const TreeComponent = ({ data }) => {
    return (
        <div>
            <TreeC data={data} />
        </div>
    );
};

export default TreeComponent;
