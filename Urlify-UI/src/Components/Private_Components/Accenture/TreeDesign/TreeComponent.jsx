import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import Tree from 'react-d3-tree';

const TreeC = ({ data }) => {
    // Create a ref for the Tree component
    const treeRef = useRef(null);

    useEffect(() => {
        if (treeRef.current) {
            d3.select(treeRef.current)
              .selectAll('.node')
              .transition() // Apply transition
              .duration(500) // Duration in ms
              .ease(d3.easeCubic) // Easing function
              .attr('transform', d => `translate(${d.x}, ${d.y})`);
        }
    }, [data]);

    const handleNodeClick = (nodeData) => {
        // Handle node click logic
    };

    const customNodeShape = {
        shape: 'rect', // Change shape to rectangle
        shapeProps: (nodeData) => ({
            width: 50, // Width of the rectangle
            height: 30, // Height of the rectangle
            fill: nodeData.color || 'red', // Set the default fill color to red
            stroke: 'black', // Border color
            strokeWidth: 2, // Border width
        }),
    };

    return (
        <div id="treeWrapper" style={{ width: '100%', height: '720px' }} ref={treeRef}>
            <Tree
                data={data}
                orientation="vertical" // Set orientation to horizontal
                translate={{ x: 700, y: 250 }} // Adjust these values to center the tree
                onNodeClick={handleNodeClick}
                nodeSvgShape={customNodeShape}
                nodeSize={{ x: 300, y: 100 }}
                transitionDuration={500} // Transition duration in milliseconds (500ms)
                transitionEase="ease"
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


