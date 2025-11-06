import React from 'react';

const Evolution = ({ stages }) => {
  return (
    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
      <h4 className="font-bold text-green-800 mb-2">Evolution</h4>
      <div className="flex items-center gap-2 text-sm text-green-700">
        {stages.map((stage, index) => (
          <React.Fragment key={index}>
            <span>{stage}</span>
            {index < stages.length - 1 && <span>→</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Evolution;