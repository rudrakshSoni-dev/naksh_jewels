import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import axios from 'axios';

export const DebugPanel: React.FC = () => {
  const [status, setStatus] = useState<string>('Not tested');
  const [response, setResponse] = useState<any>(null);

  const testBackend = async () => {
    setStatus('Testing...');
    try {
      // Test 1: Basic fetch
      const res = await fetch('http://localhost:5000/products');
      const data = await res.json();
      
      setStatus('✅ Success');
      setResponse({
        status: res.status,
        headers: Object.fromEntries(res.headers.entries()),
        data: data,
        dataType: typeof data,
        isArray: Array.isArray(data),
        length: Array.isArray(data) ? data.length : 'N/A'
      });
    } catch (error: any) {
      setStatus('❌ Error: ' + error.message);
      setResponse({ error: error.message });
    }
  };

  const testWithAxios = async () => {
    setStatus('Testing with Axios...');
    try {
      const res = await axios.get('http://localhost:5000/products');
      setStatus('✅ Axios Success');
      setResponse({
        status: res.status,
        data: res.data,
        dataType: typeof res.data,
        isArray: Array.isArray(res.data),
        length: Array.isArray(res.data) ? res.data.length : 'N/A'
      });
    } catch (error: any) {
      setStatus('❌ Axios Error: ' + error.message);
      setResponse({ 
        error: error.message,
        code: error.code,
        response: error.response?.data
      });
    }
  };

  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle>🔍 Backend Connection Debugger</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Button onClick={testBackend}>Test with Fetch</Button>
          <Button onClick={testWithAxios} variant="secondary">Test with Axios</Button>
        </div>

        <Alert>
          <AlertDescription>
            <strong>Status:</strong> {status}
          </AlertDescription>
        </Alert>

        {response && (
          <div className="bg-gray-100 p-4 rounded-lg overflow-auto max-h-96">
            <pre className="text-xs">
              {JSON.stringify(response, null, 2)}
            </pre>
          </div>
        )}

        <div className="text-sm text-muted-foreground space-y-2">
          <p><strong>Checklist:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>Is backend running on http://localhost:5000?</li>
            <li>Does http://localhost:5000/products return data?</li>
            <li>Is CORS enabled on backend?</li>
            <li>Check browser console for errors</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
